const dbMock = require('../../config/__mocks__/database');

const Post = dbMock.define('post', {
    title: 'test title',
    content: 'test content',
    userId: 1,
});

module.exports = Post;
