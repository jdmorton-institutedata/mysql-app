const dbMock = require('../../config/__mocks__/database');

const Comment = dbMock.define('comment', {
    content: 'test content',
    postId: 1,
    userId: 1,
});

module.exports = Comment;
