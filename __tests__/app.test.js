const request = require('supertest');
const app = require('../app');
const db = require('../config/database');

let testDb = db;

beforeAll(async () => {
  await db.Sequelize.authenticate();
  await db.Sequelize.sync();
  console.log('Jest starting!');
});

afterAll(async () => {
  await testDb.Sequelize.close();
  console.log('Jest completed!');
});

describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(app)
      .get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('Welcome to my Blog application.');
  });
});