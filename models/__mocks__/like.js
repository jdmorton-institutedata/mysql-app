const dbMock = require('../../config/__mocks__/database');

const Like = dbMock.define('like', {
    postId: 1,
    userId: 1,
});

module.exports = Like;