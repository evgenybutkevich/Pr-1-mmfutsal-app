const assert = require('assert');
const supertest = require('supertest');

const app = require('../express/routes');
const models = require('../sequelize/models');

describe('GET /players', () => {
    it('should return all players', async () => {
        await supertest(app)
            .get('/players')
            .expect(200);
    });
});

describe('GET /players/:id', () => {
    it('should return player', async () => {
        const testPlayer = await models.player.findOne();

        await supertest(app)
            .get(`/players/${testPlayer.id}`)
            .expect(200);
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

        const numberOfPlayersBefore = await models.player.count();

        const res = await supertest(app)
            .post('/players')
            .send(newTestPlayer)
            .expect(201);

        const numberOfPlayersAfter = await models.player.count();
        const playerById = await models.player.findByPk(res.body.player.id);

        assert.strictEqual(numberOfPlayersBefore + 1, numberOfPlayersAfter, 'Should create player');
        assert.strictEqual(newTestPlayer.player.firstName, playerById.firstName, 'Should create correct player');
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
            .expect(400);
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
            .expect(200);

        const testPlayerAfter = await models.player.findByPk(testPlayerBefore.id);

        assert.strictEqual(testPlayerAfter.firstName, newPlayerName, 'Should update firstName');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .put('/players/15.5')
            .send({ player: {} })
            .expect(400);
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

        const numberOfPlayersBefore = await models.player.count();
        const newPlayer = await models.player.create(newTestPlayer.player);

        await supertest(app)
            .delete(`/players/${newPlayer.id}`)
            .expect(200);

        const numberOfPlayersAfter = await models.player.count();
        const playerById = await models.player.findByPk(newPlayer.id);

        assert.strictEqual(numberOfPlayersBefore, numberOfPlayersAfter, 'Should delete player');
        assert.strictEqual(playerById, null, 'Should delete correct player');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .delete('/players/-12')
            .expect(400);
    });
});
