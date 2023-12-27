const request = require("supertest");
const app = require("../../app");
const userController = require("../../controllers/userController");
const db = require("../../config/database");
const models = require("../../models");
const userRoutes = require("../userRoutes");

let testDb = db;

// Import the userRoutes module
const postRoutes = require('../userRoutes');

// Add the userRoutes middleware to the app
app.use('/api/users', userRoutes);

beforeAll(async () => {
  await db.Sequelize.authenticate();
  await models.init();
  console.log("User routes tests starting!");
});

afterAll(async () => {
  await testDb.Sequelize.close();
  console.log("User routes tests completed!");
});

describe("User Routes", () => {
  describe("GET /api/users", () => {
    it("should return all users", async () => {
      const res = await request(app).get("/api/users");
      const users = await userController.getUsers();
      expect(res.statusCode).toEqual(200);
      expect(res.body.data.length).toEqual(users.length);
    });
  });

  describe("GET /api/users/:id", () => {
    it("should return a user by ID", async () => {
      const id = 1; // Replace with a valid user ID
      const res = await request(app).get(`/api/users/${id}`);
      const bob = await userController.getUser(id);
      expect(res.statusCode).toEqual(200);
      expect(res.body.data.id).toEqual(bob.id);
    });
  });

  it("should return 404 if user not found", async () => {
    const id = 999; // Replace with a non-existent user ID
    const res = await request(app).get(`/api/users/${id}`);
    expect(res.statusCode).toEqual(404);
  });

  it("should return 422 if validation error", async () => {
    const id = "invalid"; // Replace with an invalid user ID
    const res = await request(app).get(`/api/users/${id}`);
    expect(res.statusCode).toEqual(422);
  });
});

describe("POST /api/users", () => {
  it('should create a new user', async () => {
    const user = {
      name: 'John Doe',
      email: `john@dudes${Date.now()}.com`,
      password: 'password'
    };
    const res = await request(app).post('/api/users').send(user);
    const createdUser = await userController.getUser(res.body.data.id);
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.id).toEqual(createdUser.dataValues.id);
  });
  it('should return 422 if validation error', async () => {
    const user = {
      name: 'John Doe',
      email: 'invalid_email', // Replace with an invalid email
      password: 'password'
    };
    const res = await request(app).post('/api/users').send(user);
    expect(res.statusCode).toEqual(422);
  });
});

describe("PUT /api/users/:id", () => {
  it('should update a user by ID', async () => {
    const id = 1; // Replace with a valid user ID
    const updatedUser = {
      name: 'Updated Name',
      email: 'updated_email@dudes.com',
      password: 'updated_password'
    };
    const res = await request(app).put(`/api/users/${id}`).send(updatedUser);
    const updatedUser2 = await userController.getUser(id);
    // console.log(res.body);
    expect(res.statusCode).toEqual(200);
    expect(updatedUser.email).toEqual(updatedUser2.dataValues.email);
  });
  it('should return 404 if user not found', async () => {
    const id = 999; // Replace with a non-existent user ID
    const updatedUser = {
      name: 'Updated Name',
      email: 'updated_email@dudes.com',
      password: 'updated_password'
    };
    const res = await request(app).put(`/api/users/${id}`).send(updatedUser);
    expect(res.statusCode).toEqual(404);
  });
  it('should return 422 if validation error', async () => {
    const id = 1; // Replace with a valid user ID
    const updatedUser = {
      name: 'Updated Name',
      email: 'invalid_email', // Replace with an invalid email
      password: 'updated_password'
    };
    const res = await request(app).put(`/api/users/${id}`).send(updatedUser);
    expect(res.statusCode).toEqual(422);
  });
});

describe("DELETE /api/users/:id", () => {
  //     it('should delete a user by ID', async () => {
  //       const id = 1; // Replace with a valid user ID
  //       const res = await request(app).delete(`/api/users/${id}`);
  //       expect(res.statusCode).toEqual(200);
  //       expect(res.body).toEqual(userController.deleteUser(id));
  //     });
      it('should return 404 if user not found', async () => {
        const id = 999; // Replace with a non-existent user ID
        const res = await request(app).delete(`/api/users/${id}`);
        expect(res.statusCode).toEqual(404);
      });
      it('should return 422 if validation error', async () => {
        const id = 'invalid'; // Replace with an invalid user ID
        const res = await request(app).delete(`/api/users/${id}`);
        expect(res.statusCode).toEqual(422);
      });
});
