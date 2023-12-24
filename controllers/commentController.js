// comments controller
const Comment = require('../models/comment');

// finds all comments in DB, then sends array as response
/**
 * @param {object} res - response object
 */
const getComments = (res) => {
    Comment.findAll({})
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// get single comment
/**
 * @param {number} id - comment id
 * @param {object} res - response object
 */
const getComment = (id, res) => {
    Comment.findOne({ where: { id: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// get comments by post ID
/**
 * @param {number} id - post id
 * @param {object} res - response object
 */
const getCommentsByPost = (id, res) => {
    Comment.findAll({ where: { postId: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// get comments by user ID
/**
 * @param {number} id - user id
 * @param {object} res - response object
 */
const getCommentsByUser = (id, res) => {
    Comment.findAll({ where: { userId: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};


// uses JSON from request body to create new comment in DB
/**
 * @param {object} data - comment data
 * @param {object} res - response object
 */
const createComment = (data, res) => {
    Comment.create(data)
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// update comment in DB based on ID
/**
 * @param {number} id - comment id
 * @param {object} data - comment data
 * @param {object} res - response object
 */
const updateComment = (id, data, res) => {
    Comment.update(data, { where: { id: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// delete comment in DB based on ID
/**
 * @param {number} id - comment id
 * @param {object} res - response object
 */
const deleteComment = (id, res) => {
    Comment.destroy({ where: { id: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getComments,
    createComment,
    updateComment,
    deleteComment,
    getComment,
    getCommentsByPost,
    getCommentsByUser,
};

