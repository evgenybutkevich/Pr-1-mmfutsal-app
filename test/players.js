const assert = require('assert');
const httpStatus = require('http-status');
const supertest = require('supertest');

const app = require('../index');
const models = require('../sequelize/models');

describe('GET /players', () => {
    it('should return all existing players', async () => {
        await supertest(app)
            .get('/players')
            .expect(httpStatus.OK);
    });

    it('should return all existing players sorted by id', async () => {
        const res = await supertest(app)
            .get('/players')
            .query({
                sortField: 'id',
                sortDirection: 'ASC'
            })
            .expect(httpStatus.OK);

        const sortedPlayers = await models.player.findAll({
            order: [
                ['id', 'ASC']
            ],
            limit: 5,
            raw: true
        });

        const playersIdSortedByParams = res.body.players.map((player) => {
            return { id: player.id }
        });

        const playersIdSortedManually = sortedPlayers.map((player) => {
            return { id: player.id }
        });

        assert.deepStrictEqual(playersIdSortedByParams, playersIdSortedManually,
            'should sort all existing players by ascending id');
    });

    it('should return validation error for invalid sortField', async () => {
        await supertest(app)
            .get('/players')
            .query({
                sortField: 'userName',
                sortDirection: 'ASC'
            })
            .expect(httpStatus.BAD_REQUEST);
    });

    it('should return players filtered by firstName', async () => {
        const res = await supertest(app)
            .get('/players')
            .query({
                filterField: 'firstName',
                filterValue: 'Evgeny'
            })
            .expect(httpStatus.OK);

        const filteredPlayers = await models.player.findAll({
            where: {
                firstName: 'Evgeny'
            },
            order: [
                ['id', 'ASC']
            ],
            raw: true
        });

        const playersIdFilteredByParams = res.body.players.map((player) => {
            return { id: player.id }
        });

        const playersIdFilteredManually = filteredPlayers.map((player) => {
            return { id: player.id }
        });

        assert.deepStrictEqual(playersIdFilteredByParams, playersIdFilteredManually,
            'should filter players by firstName');
    });

    it('should return validation error for invalid filterField', async () => {
        await supertest(app)
            .get('/players')
            .query({
                filterField: 'teamName',
                filterValue: 'Anton'
            })
            .expect(httpStatus.BAD_REQUEST);
    });

    it('should return 5 players on the 2nd page', async () => {
        const res = await supertest(app)
            .get('/players')
            .query({
                page: 2,
                limit: 5
            })
            .expect(httpStatus.OK);

        const selectedPlayers = await models.player.findAll({
            order: [
                ['id', 'ASC']
            ],
            offset: 5,
            limit: 5,
            raw: true
        });

        const playersIdSelectedByParams = res.body.players.map((player) => {
            return { id: player.id }
        });

        const playersIdSelectedManually = selectedPlayers.map((player) => {
            return { id: player.id }
        });

        assert.deepStrictEqual(playersIdSelectedByParams, playersIdSelectedManually,
            'should select players on the correct page');
    });

    it('should return validation error for invalid page', async () => {
        await supertest(app)
            .get('/players')
            .query({
                page: 1.5
            })
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('GET /players/:id', () => {
    it('should return single player', async () => {
        const testPlayer = await models.player.findOne();

        await supertest(app)
            .get(`/players/${testPlayer.id}`)
            .expect(httpStatus.OK);
    });

    it('should return player\'s junction table records', async () => {
        const testPlayer = await models.player.findOne();

        const res = await supertest(app)
            .get(`/players/${testPlayer.id}`)
            .expect(httpStatus.OK);

        const recordsFromResponse = res.body.playerTeamSeason;
        const recordsFromService = await models.playerTeamSeason.findAll({
            where: {
                playerId: testPlayer.id
            }
        });
        assert.deepStrictEqual(recordsFromResponse.length, recordsFromService.length,
            'should return correct number of records');
    });
});

describe('POST /players', () => {
    it('should create single player', async () => {
        const newTestPlayer = {
            player: {
                firstName: 'Slava',
                lastName: 'Lykov'
            }
        };

        const res = await supertest(app)
            .post('/players')
            .send(newTestPlayer)
            .expect(httpStatus.OK);

        const playerById = await models.player.findByPk(res.body.player.id);

        assert.deepStrictEqual(newTestPlayer.player.firstName, playerById.firstName, 'should create correct player');
    });

    it('should return validation error for invalid firstName', async () => {
        const incorrectPlayer = {
            player: {
                firstName: 'S',
                lastName: 'Lykov'
            }
        };

        await supertest(app)
            .post('/players')
            .send(incorrectPlayer)
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('PUT /players/:id', () => {
    it('should update single player', async () => {
        const newPlayerName = 'newPlayerName';

        const testPlayerBefore = await models.player.findOne();
        testPlayerBefore.firstName = newPlayerName;

        const editedTestPlayer = { player: testPlayerBefore.toJSON() };

        await supertest(app)
            .put(`/players/${testPlayerBefore.id}`)
            .send(editedTestPlayer)
            .expect(httpStatus.NO_CONTENT);

        const testPlayerAfter = await models.player.findByPk(testPlayerBefore.id);

        assert.deepStrictEqual(testPlayerAfter.firstName, newPlayerName, 'should update firstName');
    });

    it('should return validation error for invalid id', async () => {
        await supertest(app)
            .put('/players/15.5')
            .send({ player: {} })
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('DELETE /players/:id', () => {
    it('should delete single player', async () => {
        const newTestPlayer = {
            player: {
                firstName: 'Evgeny',
                lastName: 'Gorohovich'
            }
        };

        const newPlayer = await models.player.create(newTestPlayer.player);

        await supertest(app)
            .delete(`/players/${newPlayer.id}`)
            .expect(httpStatus.NO_CONTENT);

        const playerById = await models.player.findByPk(newPlayer.id);

        assert.deepStrictEqual(playerById, null, 'should delete correct player');
    });

    it('should return validation error for invalid id', async () => {
        await supertest(app)
            .delete('/players/-12')
            .expect(httpStatus.BAD_REQUEST);
    });
});
