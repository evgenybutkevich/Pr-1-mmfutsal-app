const assert = require('assert');
const httpStatus = require('http-status');
const supertest = require('supertest');

const app = require('../../index');
const models = require('../../sequelize/models');

describe('GET /teams', () => {
    it('should return all existing teams', async () => {
        await supertest(app)
            .get('/teams')
            .expect(httpStatus.OK);
    });

    it('should return all existing teams sorted by id', async () => {
        const res = await supertest(app)
            .get('/teams')
            .query({
                sortField: 'id',
                sortDirection: 'ASC'
            })
            .expect(httpStatus.OK);

        const sortedTeams = await models.team.findAll({
            order: [
                ['id', 'ASC']
            ],
            offset: 0,
            limit: 5,
            raw: true
        });

        const teamsIdSortedByParams = res.body.teams.map((team) => {
            return { id: team.id }
        });

        const teamsIdSortedManually = sortedTeams.map((team) => {
            return { id: team.id }
        });

        assert.deepStrictEqual(teamsIdSortedByParams, teamsIdSortedManually,
            'should sort all existing teams by ascending id');
    });

    it('should return validation error for invalid sortField', async () => {
        await supertest(app)
            .get('/teams')
            .query({
                sortField: 'userName',
                sortDirection: 'ASC'
            })
            .expect(httpStatus.BAD_REQUEST);
    });

    it('should return teams filtered by teamName', async () => {
        const res = await supertest(app)
            .get('/teams')
            .query({
                filterField: 'teamName',
                filterValue: 'Milan'
            })
            .expect(httpStatus.OK);

        const filteredTeams = await models.team.findAll({
            where: {
                teamName: 'Milan'
            },
            order: [
                ['id', 'ASC']
            ],
            raw: true
        });

        const teamsIdFilteredByParams = res.body.teams.map((team) => {
            return { id: team.id }
        });

        const teamsIdFilteredManually = filteredTeams.map((team) => {
            return { id: team.id }
        });

        assert.deepStrictEqual(teamsIdFilteredByParams, teamsIdFilteredManually,
            'should filter teams by teamName');
    });

    it('should return validation error for invalid filterField', async () => {
        await supertest(app)
            .get('/teams')
            .query({
                filterField: 'userName',
                filterValue: 'Juventus'
            })
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('GET /teams/:id', () => {
    it('should return single team', async () => {
        const testTeam = await models.team.findOne();

        await supertest(app)
            .get(`/teams/${testTeam.id}`)
            .expect(httpStatus.OK);
    });
});

describe('POST /teams', () => {
    it('should create single team', async () => {
        const newTestTeam = {
            team: {
                teamName: 'Lokomotiv'
            }
        };

        const res = await supertest(app)
            .post('/teams')
            .send(newTestTeam)
            .expect(httpStatus.OK);

        const teamById = await models.team.findByPk(res.body.team.id);

        assert.deepStrictEqual(newTestTeam.team.teamName, teamById.teamName, 'should create correct team');
    });

    it('should return validation error for invalid teamName', async () => {
        const incorrectTeam = {
            team: {
                teamName: 'C'
            }
        };

        await supertest(app)
            .post('/teams')
            .send(incorrectTeam)
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('PUT /teams/:id', () => {
    it('should update single team', async () => {
        const newTeamName = 'newTeamName';

        const testTeamBefore = await models.team.findOne();
        testTeamBefore.teamName = newTeamName;

        const editedTestTeam = { team: testTeamBefore.toJSON() };

        await supertest(app)
            .put(`/teams/${testTeamBefore.id}`)
            .send(editedTestTeam)
            .expect(httpStatus.NO_CONTENT);

        const testTeamAfter = await models.team.findByPk(testTeamBefore.id);

        assert.deepStrictEqual(testTeamAfter.teamName, newTeamName, 'should update teamName');
    });

    it('should return validation error for invalid id', async () => {
        await supertest(app)
            .put('/teams/15.5')
            .send({ team: {} })
            .expect(httpStatus.BAD_REQUEST);
    });

    it('should return 5 teams on the 1st page', async () => {
        const res = await supertest(app)
            .get('/teams')
            .query({
                page: 1,
                limit: 5
            })
            .expect(httpStatus.OK);

        const selectedTeams = await models.team.findAll({
            order: [
                ['id', 'ASC']
            ],
            offset: 0,
            limit: 5,
            raw: true
        });

        const teamsIdSelectedByParams = res.body.teams.map((team) => {
            return { id: team.id }
        });

        const teamsIdSelectedManually = selectedTeams.map((team) => {
            return { id: team.id }
        });

        assert.deepStrictEqual(teamsIdSelectedByParams, teamsIdSelectedManually,
            'should select teams on the correct page');
    });

    it('should return validation error for invalid page', async () => {
        await supertest(app)
            .get('/teams')
            .query({
                page: -1
            })
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('DELETE /teams/', () => {
    it('should delete single team', async () => {
        const newTestTeam = {
            team: {
                teamName: 'newTeamName'
            }
        };

        const newTeam = await models.team.create(newTestTeam.team);

        await supertest(app)
            .delete(`/teams/${newTeam.id}`)
            .expect(httpStatus.NO_CONTENT);

        const teamById = await models.team.findByPk(newTeam.id);

        assert.deepStrictEqual(teamById, null, 'should delete correct team');
    });

    it('should return validation error for invalid id', async () => {
        await supertest(app)
            .delete('/teams/-12')
            .expect(httpStatus.BAD_REQUEST);
    });
});
