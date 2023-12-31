// mock the sequelize database
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

module.exports = dbMock;