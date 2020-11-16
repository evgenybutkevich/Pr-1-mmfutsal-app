const assert = require('assert');
const httpStatus = require('http-status');
const supertest = require('supertest');

const app = require('../index');
const models = require('../sequelize/models');

describe('GET /sections', () => {
    it('should return all sections', async () => {
        await supertest(app)
            .get('/sections')
            .expect(httpStatus.OK);
    });
});

describe('GET /sections/:id', () => {
    it('should return section', async () => {
        const testSection = await models.section.findOne();

        await supertest(app)
            .get(`/sections/${testSection.id}`)
            .expect(httpStatus.OK);
    });
});

describe('POST /sections', () => {
    it('should create section', async () => {
        const newTestSection = {
            section: {
                name: 'amazing'
            }
        };

        const res = await supertest(app)
            .post('/sections')
            .send(newTestSection)
            .expect(httpStatus.OK);

        const sectionById = await models.section.findByPk(res.body.section.id);

        assert.deepStrictEqual(newTestSection.section.name, sectionById.name, 'Should create correct section');
    });

    it('should return validation error', async () => {
        const incorrectSection = {
            section: {
                name: 'a'
            }
        };

        await supertest(app)
            .post('/sections')
            .send(incorrectSection)
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('PUT /sections/:id', () => {
    it('should update section', async () => {
        const newName = 'newName';

        const testSectionBefore = await models.section.findOne();
        testSectionBefore.name = newName;

        const editedTestSection = { section: testSectionBefore.toJSON() };

        await supertest(app)
            .put(`/sections/${testSectionBefore.id}`)
            .send(editedTestSection)
            .expect(httpStatus.NO_CONTENT);

        const testSectionAfter = await models.section.findByPk(testSectionBefore.id);

        assert.deepStrictEqual(testSectionAfter.name, newName, 'Should update name');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .put('/sections/7.5')
            .send({ section: {} })
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('DELETE /sections/', () => {
    it('should delete section', async () => {
        const newTestSection = {
            section: {
                name: 'amazing'
            }
        };

        const newSection = await models.section.create(newTestSection.section);

        await supertest(app)
            .delete(`/sections/${newSection.id}`)
            .expect(httpStatus.NO_CONTENT);

        const sectionById = await models.section.findByPk(newSection.id);

        assert.deepStrictEqual(sectionById, null, 'Should delete correct section');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .delete('/sections/-12')
            .expect(httpStatus.BAD_REQUEST);
    });
});
