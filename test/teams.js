const assert = require('assert');
const supertest = require('supertest');

const app = require('../express/routes');
const models = require('../sequelize/models');

describe('GET /teams', () => {
    it('should return all teams and have status code 200', () => {
        supertest(app)
            .get('/teams')
            .expect(200);
    });
});

describe('GET /teams/:id', () => {
    it('should return team and have status code 200', async () => {
        const testTeam = await models.team.findOne();

        const res = supertest(app)
            .get(`/teams/${testTeam.id}`)
            .expect(200);
    });
});

describe('POST /teams', () => {
    it('should create team and have status code 201', async () => {
        const newTestTeam = {
            team: {
                teamName: 'Lokomotiv'
            }
        };

        const numberOfTeamsBefore = await models.team.count();

        const res = await supertest(app)
            .post('/teams')
            .send(newTestTeam)
            .expect(201);

        const numberOfTeamsAfter = await models.team.count();
        const teamById = await models.team.findByPk(res.body.team.id);

        assert.strictEqual(numberOfTeamsBefore + 1, numberOfTeamsAfter, 'Should create team');
        assert.strictEqual(newTestTeam.team.teamName, teamById.teamName, 'Should create correct team');
    });

    it('should return validation error and have status code 400', async () => {
        const newTestTeam = {
            team: {
                teamName: 'C'
            }
        };

        const res = await supertest(app)
            .post('/teams')
            .send(newTestTeam)
            .expect(400);
    });
});

describe('PUT /teams/:id', () => {
    it('should update team and have status code 200', async () => {
        const newTeamName = 'newTeamName';

        const testTeamBefore = await models.team.findOne();
        testTeamBefore.teamName = newTeamName;

        const editTestTeam = { team: testTeamBefore.toJSON() };

        const res = await supertest(app)
            .put(`/teams/${testTeamBefore.id}`)
            .send(editTestTeam)
            .expect(200);

        const testTeamAfter = await models.team.findByPk(testTeamBefore.id);

        assert.strictEqual(testTeamAfter.teamName, newTeamName, 'Should update teamName');
    });

    it('should return validation error and have status code 400', async () => {
        const newTeamName = 'Bayern';

        const testTeamBefore = await models.team.findOne();
        testTeamBefore.teamName = newTeamName;

        const editTestTeam = { team: testTeamBefore.toJSON() };

        const res = await supertest(app)
            .put('/teams/15.5')
            .send(editTestTeam)
            .expect(400);
    });
});

describe('DELETE /teams/', () => {
    it('should delete team and have status code 200', async () => {
        const newTestTeam = {
            team: {
                teamName: 'newTeamName'
            }
        };

        const numberOfTeamsBefore = await models.team.count();
        const newTeam = await models.team.create(newTestTeam.team);

        const res = await supertest(app)
            .delete(`/teams/${newTeam.id}`)
            .expect(200);

        const numberOfTeamsAfter = await models.team.count();
        const teamById = await models.team.findByPk(newTeam.id);

        assert.strictEqual(numberOfTeamsBefore, numberOfTeamsAfter, 'Should delete team');
        assert.strictEqual(teamById, null, 'Should delete correct team');
    });

    it('should return validation error and have status code 400', async () => {
        const res = await supertest(app)
            .delete('/teams/-12')
            .expect(400);
    });
});
