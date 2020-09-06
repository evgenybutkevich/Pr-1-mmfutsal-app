const assert = require('assert');
const supertest = require('supertest');

const app = require('../express/routes');
const { models } = require('../sequelize');

describe('GET /', () => {
    it('should have status code 200', () => {
        supertest(app)
            .get('/')
            .expect(200);
    });
});

describe('GET /users', () => {
    it('should return all users and have status code 200', () => {
        supertest(app)
            .get('/users')
            .expect(200);
    });
});

describe('GET /users/:id', () => {
    it('should return user and have status code 200', async () => {
        const testUser = await models.user.findOne();

        const res = supertest(app)
            .get(`/users/${testUser.id}`)
            .expect(200);
    });
});

describe('POST /users', () => {
    it('should create user and have status code 201', async () => {
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

        assert.equal(numberOfUsersBefore + 1, numberOfUsersAfter, 'Should create user');
        assert.equal(newTestUser.user.firstName, userById.firstName, 'Should create correct user');
    });

    it('should return validation error and have status code 400', async () => {
        const newTestUser = {
            user: {
                userName: 'us',
                email: 'userName_6@example.com',
                telephone: '+375 44 666-66-66',
                password: 'Un66666',
                firstName: 'Slava',
                lastName: 'Lykov'
            }
        };

        const res = await supertest(app)
            .post('/users')
            .send(newTestUser)
            .expect(400);
    });
});

describe('PUT /users/:id', () => {
    it('should update user and have status code 200', async () => {
        const newUserName = 'newUserName';
        const newEmail = 'newUserName@example.com';

        const testUserBefore = await models.user.findOne();
        testUserBefore.userName = newUserName;
        testUserBefore.email = newEmail;

        const editTestUser = { user: testUserBefore.toJSON() };

        const res = await supertest(app)
            .put(`/users/${testUserBefore.id}`)
            .send(editTestUser)
            .expect(200);

        const testUserAfter = await models.user.findByPk(testUserBefore.id);

        assert.equal(testUserAfter.userName, newUserName, 'Should update userName');
        assert.equal(testUserAfter.email, newEmail, 'Should update email');
    });

    it('should return validation error and have status code 400', async () => {
        const newUserName = 'newUserName';
        const newEmail = 'newUserName@example.com';

        const testUserBefore = await models.user.findOne();
        testUserBefore.userName = newUserName;
        testUserBefore.email = newEmail;

        const editTestUser = { user: testUserBefore.toJSON() };

        const res = await supertest(app)
            .put('/users/15.5')
            .send(editTestUser)
            .expect(400);
    });
});

describe('DELETE /users/', () => {
    it('should delete user and have status code 200', async () => {
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

        const res = await supertest(app)
            .delete(`/users/${newUser.id}`)
            .expect(200);

        const numberOfUsersAfter = await models.user.count();
        const userById = await models.user.findByPk(newUser.id);

        assert.equal(numberOfUsersBefore, numberOfUsersAfter, 'Should delete user');
        assert.equal(userById, null, 'Should delete correct user');
    });

    it('should return validation error and have status code 400', async () => {
        const res = await supertest(app)
            .delete('/users/-12')
            .expect(400);
    });
});