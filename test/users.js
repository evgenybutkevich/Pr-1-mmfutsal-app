const assert = require('assert');
const httpStatus = require('http-status');
const supertest = require('supertest');

const app = require('../index');
const models = require('../sequelize/models');

describe('GET /users', () => {
    it('should return all existing users', async () => {
        await supertest(app)
            .get('/users')
            .expect(httpStatus.OK);
    });

    it('should return all existing users sorted by id', async () => {
        const res = await supertest(app)
            .get('/users')
            .query({
                sortField: 'id',
                sortDirection: 'ASC'
            })
            .expect(httpStatus.OK);

        const sortedUsers = await models.user.findAll({
            order: [
                ['id', 'ASC']
            ],
            raw: true
        });

        const usersIdSortedByParams = res.body.users.map((user) => {
            return { id: user.id }
        });

        const usersIdSortedManually = sortedUsers.map((user) => {
            return { id: user.id }
        });

        assert.deepStrictEqual(usersIdSortedByParams, usersIdSortedManually,
            'should sort all existing users by ascending id');
    });

    it('should return validation error for invalid sortField', async () => {
        await supertest(app)
            .get('/users')
            .query({
                sortField: 'teamName',
                sortDirection: 'ASC'
            })
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('GET /users/:id', () => {
    it('should return single user', async () => {
        const testUser = await models.user.findOne();

        await supertest(app)
            .get(`/users/${testUser.id}`)
            .expect(httpStatus.OK);
    });
});

describe('POST /users', () => {
    it('should create single user', async () => {
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

        const res = await supertest(app)
            .post('/users')
            .send(newTestUser)
            .expect(httpStatus.OK);

        const userById = await models.user.findByPk(res.body.user.id);

        assert.deepStrictEqual(newTestUser.user.firstName, userById.firstName, 'should create correct user');
    });

    it('should return validation error for invalid userName', async () => {
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
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('PUT /users/:id', () => {
    it('should update single user', async () => {
        const newUserName = 'newUserName';
        const newEmail = 'newUserName@example.com';

        const testUserBefore = await models.user.findOne();
        testUserBefore.userName = newUserName;
        testUserBefore.email = newEmail;

        const editedTestUser = { user: testUserBefore.toJSON() };

        await supertest(app)
            .put(`/users/${testUserBefore.id}`)
            .send(editedTestUser)
            .expect(httpStatus.NO_CONTENT);

        const testUserAfter = await models.user.findByPk(testUserBefore.id);

        assert.deepStrictEqual(testUserAfter.userName, newUserName, 'should update userName');
        assert.deepStrictEqual(testUserAfter.email, newEmail, 'should update email');
    });

    it('should return validation error for invalid id', async () => {
        await supertest(app)
            .put('/users/15.5')
            .send({ user: {} })
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('DELETE /users/:id', () => {
    it('should delete single user', async () => {
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

        const newUser = await models.user.create(newTestUser.user);

        await supertest(app)
            .delete(`/users/${newUser.id}`)
            .expect(httpStatus.NO_CONTENT);

        const userById = await models.user.findByPk(newUser.id);

        assert.deepStrictEqual(userById, null, 'should delete correct user');
    });

    it('should return validation error for invalid id', async () => {
        await supertest(app)
            .delete('/users/-12')
            .expect(httpStatus.BAD_REQUEST);
    });
});
