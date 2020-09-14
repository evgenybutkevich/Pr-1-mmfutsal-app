const assert = require('assert');
const supertest = require('supertest');

const app = require('../express/routes');
const models = require('../sequelize/models');

describe('GET /users', () => {
    it('should return all users', async () => {
        await supertest(app)
            .get('/users')
            .expect(200);
    });
});

describe('GET /users/:id', () => {
    it('should return user', async () => {
        const testUser = await models.user.findOne();

        await supertest(app)
            .get(`/users/${testUser.id}`)
            .expect(200);
    });
});

describe('POST /users', () => {
    it('should create user', async () => {
        const newTestUser = {
            user: {
                userName: 'userName_6',
                email: 'userName_6@example.com',
                telephone: '+375 44 666-66-66',
                password: 'Un66666',
                firstName: 'Slava',
                lastName: 'Lykov'
            }
        };

        const numberOfUsersBefore = await models.user.count();

        const res = await supertest(app)
            .post('/users')
            .send(newTestUser)
            .expect(201);

        const numberOfUsersAfter = await models.user.count();
        const userById = await models.user.findByPk(res.body.user.id);

        assert.strictEqual(numberOfUsersBefore + 1, numberOfUsersAfter, 'Should create user');
        assert.strictEqual(newTestUser.user.firstName, userById.firstName, 'Should create correct user');
    });

    it('should return validation error', async () => {
        const incorrectUser = {
            user: {
                userName: 'us',
                email: 'userName_6@example.com',
                telephone: '+375 44 666-66-66',
                password: 'Un66666',
                firstName: 'Slava',
                lastName: 'Lykov'
            }
        };

        await supertest(app)
            .post('/users')
            .send(incorrectUser)
            .expect(400);
    });
});

describe('PUT /users/:id', () => {
    it('should update user', async () => {
        const newUserName = 'newUserName';
        const newEmail = 'newUserName@example.com';

        const testUserBefore = await models.user.findOne();
        testUserBefore.userName = newUserName;
        testUserBefore.email = newEmail;

        const editedTestUser = { user: testUserBefore.toJSON() };

        await supertest(app)
            .put(`/users/${testUserBefore.id}`)
            .send(editedTestUser)
            .expect(200);

        const testUserAfter = await models.user.findByPk(testUserBefore.id);

        assert.strictEqual(testUserAfter.userName, newUserName, 'Should update userName');
        assert.strictEqual(testUserAfter.email, newEmail, 'Should update email');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .put('/users/15.5')
            .send({ user: {} })
            .expect(400);
    });
});

describe('DELETE /users/:id', () => {
    it('should delete user', async () => {
        const newTestUser = {
            user: {
                userName: 'userName_7',
                email: 'userName_7@example.com',
                telephone: '+375 33 777-77-77',
                password: 'Un77777',
                firstName: 'Evgeny',
                lastName: 'Gorohovich'
            }
        };

        const numberOfUsersBefore = await models.user.count();
        const newUser = await models.user.create(newTestUser.user);

        await supertest(app)
            .delete(`/users/${newUser.id}`)
            .expect(200);

        const numberOfUsersAfter = await models.user.count();
        const userById = await models.user.findByPk(newUser.id);

        assert.strictEqual(numberOfUsersBefore, numberOfUsersAfter, 'Should delete user');
        assert.strictEqual(userById, null, 'Should delete correct user');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .delete('/users/-12')
            .expect(400);
    });
});
