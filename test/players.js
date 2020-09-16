const assert = require('assert');
const httpStatus = require('http-status');
const supertest = require('supertest');

const app = require('../index');
const models = require('../sequelize/models');

describe('GET /players', () => {
    it('should return all players', async () => {
        await supertest(app)
            .get('/players')
            .expect(httpStatus.OK);
    });
});

describe('GET /players/:id', () => {
    it('should return player', async () => {
        const testPlayer = await models.player.findOne();

        await supertest(app)
            .get(`/players/${testPlayer.id}`)
            .expect(httpStatus.OK);
    });
});

describe('POST /players', () => {
    it('should create player', async () => {
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

        assert.deepStrictEqual(newTestPlayer.player.firstName, playerById.firstName, 'Should create correct player');
    });

    it('should return validation error', async () => {
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
    it('should update player', async () => {
        const newPlayerName = 'newPlayerName';

        const testPlayerBefore = await models.player.findOne();
        testPlayerBefore.firstName = newPlayerName;

        const editedTestPlayer = { player: testPlayerBefore.toJSON() };

        await supertest(app)
            .put(`/players/${testPlayerBefore.id}`)
            .send(editedTestPlayer)
            .expect(httpStatus.NO_CONTENT);

        const testPlayerAfter = await models.player.findByPk(testPlayerBefore.id);

        assert.deepStrictEqual(testPlayerAfter.firstName, newPlayerName, 'Should update firstName');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .put('/players/15.5')
            .send({ player: {} })
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('DELETE /players/:id', () => {
    it('should delete player', async () => {
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

        assert.deepStrictEqual(playerById, null, 'Should delete correct player');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .delete('/players/-12')
            .expect(httpStatus.BAD_REQUEST);
    });
});
