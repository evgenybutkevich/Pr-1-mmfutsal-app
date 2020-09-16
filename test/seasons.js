const assert = require('assert');
const httpStatus = require('http-status');
const supertest = require('supertest');

const app = require('../index');
const models = require('../sequelize/models');

describe('GET /seasons', () => {
    it('should return all seasons', async () => {
        await supertest(app)
            .get('/seasons')
            .expect(httpStatus.OK);
    });
});

describe('GET /seasons/:id', () => {
    it('should return season', async () => {
        const testSeason = await models.season.findOne();

        await supertest(app)
            .get(`/seasons/${testSeason.id}`)
            .expect(httpStatus.OK);
    });
});

describe('POST /seasons', () => {
    it('should create season', async () => {
        const newTestSeason = {
            season: {
                seasonName: 'Test season',
                startYear: '2019-09-01',
                endYear: '2020-04-30',
            }
        };

        const res = await supertest(app)
            .post('/seasons')
            .send(newTestSeason)
            .expect(httpStatus.OK);

        const seasonById = await models.season.findByPk(res.body.season.id);

        assert.deepStrictEqual(newTestSeason.season.seasonName, seasonById.seasonName, 'Should create correct season');
    });

    it('should return validation error', async () => {
        const incorrectSeason = {
            season: {
                seasonName: 'T',
                startYear: '2019-09-01',
                endYear: '2020-04-30',
            }
        };

        await supertest(app)
            .post('/seasons')
            .send(incorrectSeason)
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('PUT /seasons/:id', () => {
    it('should update season', async () => {
        const newSeasonName = 'newSeasonName';

        const testSeasonBefore = await models.season.findOne();
        testSeasonBefore.seasonName = newSeasonName;

        const editedTestSeason = { season: testSeasonBefore.toJSON() };

        await supertest(app)
            .put(`/seasons/${testSeasonBefore.id}`)
            .send(editedTestSeason)
            .expect(httpStatus.NO_CONTENT);

        const testSeasonAfter = await models.season.findByPk(testSeasonBefore.id);

        assert.deepStrictEqual(testSeasonAfter.seasonName, newSeasonName, 'Should update seasonName');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .put('/seasons/15.5')
            .send({ season: {} })
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('DELETE /seasons/', () => {
    it('should delete season', async () => {
        const newTestSeason = {
            season: {
                seasonName: 'Test season',
                startYear: '2019-09-01',
                endYear: '2020-04-30',
            }
        };

        const newSeason = await models.season.create(newTestSeason.season);

        await supertest(app)
            .delete(`/seasons/${newSeason.id}`)
            .expect(httpStatus.NO_CONTENT);

        const seasonById = await models.season.findByPk(newSeason.id);

        assert.deepStrictEqual(seasonById, null, 'Should delete correct season');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .delete('/seasons/-12')
            .expect(httpStatus.BAD_REQUEST);
    });
});
