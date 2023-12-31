const dbMock = require('../../config/__mocks__/database');

const User = dbMock.define('user', {
    name: 'unit test user',
    lastName: 'user',
    email: 'test@unit.com',
    password: 'password',
});