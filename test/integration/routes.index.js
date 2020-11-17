const httpStatus = require('http-status');
const supertest = require('supertest');

const app = require('../../index');

describe('GET /', () => {
    it('should return status OK', async () => {
        await supertest(app)
            .get('/')
            .expect(httpStatus.OK);
    });
});
