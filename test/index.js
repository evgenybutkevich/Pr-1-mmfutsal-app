const supertest = require('supertest');

const app = require('../express/routes');

describe('GET /', () => {
    it('should have status code 200', () => {
        supertest(app)
            .get('/')
            .expect(200);
    });
});