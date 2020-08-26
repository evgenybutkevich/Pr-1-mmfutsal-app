const supertest = require("supertest");
const assert = require("assert");
const app = require("../express/app");

describe("GET /", () => {
    it("it should has status code 200", (done) => {
      supertest(app)
        .get("/")
        .expect(200)
        .end((err, res) => {
            if (err) done(err);
            done();
        });
    });
});

describe("GET /users", () => {
    it("it should has status code 200", (done) => {
      supertest(app)
        .get("/users")
        .expect(200)
        .end((err, res) => {
            if (err) done(err);
            done();
        });
    });
});

describe("GET /users/1", () => {
    it("it should has status code 200", (done) => {
      supertest(app)
        .get("/users/1")
        .expect(200)
        .end((err, res) => {
            if (err) done(err);
            done();
        });
    });
});