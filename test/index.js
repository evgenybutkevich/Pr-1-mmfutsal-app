const supertest = require('supertest');

const app = require('../express/routes');

describe('GET /', () => {
    it('', async () => {
        await supertest(app)
            .get('/')
            .expect(200);
    });
});
