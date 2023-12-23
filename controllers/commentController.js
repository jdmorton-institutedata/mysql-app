// comments controller
const Comment = require('../models/comment');

// finds all comments in DB, then sends array as response
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

