const assert = require('assert');
const httpStatus = require('http-status');
const supertest = require('supertest');

const app = require('../../index');
const models = require('../../sequelize/models');

describe('GET /news', () => {
    it('should return all news', async () => {
        await supertest(app)
            .get('/news')
            .expect(httpStatus.OK);
    });
});

describe('GET /news/:id', () => {
    it('should return news', async () => {
        const testNews = await models.news.findOne();

        await supertest(app)
            .get(`/news/${testNews.id}`)
            .expect(httpStatus.OK);
    });
});

describe('POST /news', () => {
    it('should create news', async () => {
        const newTestNews = {
            news: {
                heading: 'Test news heading',
                sectionId: 2,
                content: "Tets news content",
                userId: 3
            }
        };

        const res = await supertest(app)
            .post('/news')
            .send(newTestNews)
            .expect(httpStatus.OK);

        const newsById = await models.news.findByPk(res.body.news.id);

        assert.deepStrictEqual(newTestNews.news.heading, newsById.heading, 'Should create correct news');
    });

    it('should return validation error', async () => {
        const incorrectNews = {
            news: {
                heading: 'T',
                sectionId: 2,
                content: "Content of incorrect news",
                userId: 3
            }
        };

        await supertest(app)
            .post('/news')
            .send(incorrectNews)
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('PUT /news/:id', () => {
    it('should update news', async () => {
        const newHeading = 'newNewsHeading';

        const testNewsBefore = await models.news.findOne();
        testNewsBefore.heading = newHeading;

        const editedTestNews = { news: testNewsBefore.toJSON() };

        await supertest(app)
            .put(`/news/${testNewsBefore.id}`)
            .send(editedTestNews)
            .expect(httpStatus.NO_CONTENT);

        const testNewsAfter = await models.news.findByPk(testNewsBefore.id);

        assert.deepStrictEqual(testNewsAfter.heading, newHeading, 'Should update heading');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .put('/seasons/7.5')
            .send({ news: {} })
            .expect(httpStatus.BAD_REQUEST);
    });
});

describe('DELETE /news/', () => {
    it('should delete news', async () => {
        const newTestNews = {
            news: {
                heading: 'Test news heading',
                sectionId: 2,
                content: "Tets news content",
                userId: 3
            }
        };

        const newNews = await models.news.create(newTestNews.news);

        await supertest(app)
            .delete(`/news/${newNews.id}`)
            .expect(httpStatus.NO_CONTENT);

        const newsById = await models.news.findByPk(newSeason.id);

        assert.deepStrictEqual(newsById, null, 'Should delete correct news');
    });

    it('should return validation error', async () => {
        await supertest(app)
            .delete('/news/-12')
            .expect(httpStatus.BAD_REQUEST);
    });
});
