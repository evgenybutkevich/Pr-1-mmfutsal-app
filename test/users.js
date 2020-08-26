const supertest = require("supertest");
const assert = require("assert");
const {models} = require("../sequelize");
const app = require("../express/routes");

describe("GET /", () => {
    it("should have status code 200", (done) => {
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
    it("should return all users and have status code 200", (done) => {
      supertest(app)
            .get("/users")
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                done();
            });
    });
});

describe("GET /users/:id", () => {
    it("should return user and have status code 200", async () => {
        const testUser = await models.user.findOne();

        const res = supertest(app)
            .get(`/users/${testUser.id}`)
            .expect(200);
    });
});

describe("POST /users", () => {
    it("should create user and have status code 201", async () => {
        const newTestUser = {user: {
            userName: "sunbeam",
            email: "v.lykov@gmail.com",
            telephone: "+375 44 757-53-96",
            password: "44444",
            firstName: "Slava",
            lastName: "Lykov",            
            createdAt: new Date(),
            updatedAt: new Date()
        }};

        const numberOfUsersBefore = await models.user.count();

        const res = await supertest(app)
            .post("/users")
            .send(newTestUser)
            .expect(201);
                
        const numberOfUsersAfter = await models.user.count();
        const userById = await models.user.findByPk(res.body.user.id);

        assert.equal(numberOfUsersBefore + 1, numberOfUsersAfter, "Should create user");
        assert.equal(newTestUser.user.firstName, userById.firstName, "Should create correct user");
    });
});

describe("PUT /users/:id", () => {
    it("should update user and have status code 200", async () => {
        newUserName = "newUserName";
        newEmail = "newEmail@gmail.com";

        const testUserBefore = await models.user.findOne();

        const res = await supertest(app)
            .put(`/users/${testUserBefore.id}`)            
            .send({
                id: testUserBefore.id,
                userName: newUserName,
                email: newEmail
            })
            .expect(200);

        const testUserAfter = await models.user.findByPk(testUserBefore.id);
        
        assert.equal(testUserAfter.userName, newUserName, "Should update userName");
        assert.equal(testUserAfter.email, newEmail, "Should update email");
    });
});

describe("DELETE /users/", () => {
    it("should create user, delete him and have status code 200", async () => {
        const newTestUser = {user: {
            userName: "91_sava_91",
            email: "e.gorohovich@eximgarant.by",
            telephone: "+375 33 641-44-49",
            password: "55555",
            firstName: "Evgeny",
            lastName: "Gorohovich",            
            createdAt: new Date(),
            updatedAt: new Date()
        }};

        const numberOfUsersBefore = await models.user.count();
        const newUser = await models.user.create(newTestUser.user);
        
        const res = await supertest(app)
            .delete(`/users/${newUser.id}`)
            .expect(200);

        const numberOfUsersAfter = await models.user.count();
        const userById = await models.user.findByPk(newUser.id);

        assert.equal(numberOfUsersBefore, numberOfUsersAfter, "Should delete user");
        assert.equal(userById, null, "Should delete correct user");
    });
});