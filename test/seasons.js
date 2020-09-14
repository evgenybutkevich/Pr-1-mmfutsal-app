const assert = require('assert');
const supertest = require('supertest');

const app = require('../express/routes');
const models = require('../sequelize/models');

describe('GET /seasons', () => {
    it('should return all seasons and have status code 200', () => {
        supertest(app)
            .get('/seasons')
            .expect(200);
    });
});

describe('GET /seasons/:id', () => {
    it('should return season and have status code 200', async () => {
        const testSeason = await models.season.findOne();

        const res = supertest(app)
            .get(`/seasons/${testSeason.id}`)
            .expect(200);
    });
});

describe('POST /seasons', () => {
    it('should create season and have status code 201', async () => {
        const newTestSeason = {
            season: {
                seasonName: 'Test season',
                startYear: '2019-09-01',
                endYear: '2020-04-30',
            }
        };

        const numberOfSeasonsBefore = await models.season.count();

        const res = await supertest(app)
            .post('/seasons')
            .send(newTestSeason)
            .expect(201);

        const numberOfSeasonsAfter = await models.season.count();
        const seasonById = await models.season.findByPk(res.body.season.id);

        assert.strictEqual(numberOfSeasonsBefore + 1, numberOfSeasonsAfter, 'Should create season');
        assert.strictEqual(newTestSeason.season.seasonName, seasonById.seasonName, 'Should create correct season');
    });

    it('should return validation error and have status code 400', async () => {
        const newTestSeason = {
            season: {
                seasonName: 'T',
                startYear: '2019-09-01',
                endYear: '2020-04-30',
            }
        };

        const res = await supertest(app)
            .post('/seasons')
            .send(newTestSeason)
            .expect(400);
    });
});

describe('PUT /seasons/:id', () => {
    it('should update season and have status code 200', async () => {
        const newSeasonName = 'newSeasonName';

        const testSeasonBefore = await models.season.findOne();
        testSeasonBefore.seasonName = newSeasonName;

        const editTestSeason = { season: testSeasonBefore.toJSON() };

        const res = await supertest(app)
            .put(`/seasons/${testSeasonBefore.id}`)
            .send(editTestSeason)
            .expect(200);

        const testSeasonAfter = await models.season.findByPk(testSeasonBefore.id);

        assert.strictEqual(testSeasonAfter.seasonName, newSeasonName, 'Should update seasonName');
    });

    it('should return validation error and have status code 400', async () => {
        const newSeasonName = 'newSeasonName';

        const testSeasonBefore = await models.season.findOne();
        testSeasonBefore.seasonName = newSeasonName;

        const editTestSeason = { season: testSeasonBefore.toJSON() };

        const res = await supertest(app)
            .put('/seasons/15.5')
            .send(editTestSeason)
            .expect(400);
    });
});

describe('DELETE /seasons/', () => {
    it('should delete season and have status code 200', async () => {
        const newTestSeason = {
            season: {
                seasonName: 'Test season',
                startYear: '2019-09-01',
                endYear: '2020-04-30',
            }
        };

        const numberOfSeasonsBefore = await models.season.count();
        const newSeason = await models.season.create(newTestSeason.season);

        const res = await supertest(app)
            .delete(`/seasons/${newSeason.id}`)
            .expect(200);

        const numberOfSeasonsAfter = await models.season.count();
        const seasonById = await models.season.findByPk(newSeason.id);

        assert.strictEqual(numberOfSeasonsBefore, numberOfSeasonsAfter, 'Should delete season');
        assert.strictEqual(seasonById, null, 'Should delete correct season');
    });

    it('should return validation error and have status code 400', async () => {
        const res = await supertest(app)
            .delete('/seasons/-12')
            .expect(400);
    });
});
