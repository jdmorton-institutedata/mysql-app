// posts controller
const Post = require('../models/post');

// finds all posts in DB, then sends array as response
/**
 * @param {object} res - response object
 */
const getPosts = (res) => {
    Post.findAll({})
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// get single post
/**
 * @param {number} id - post id
 * @param {object} res - response object
 */
const getPost = (id, res) => {
    Post.findOne({ where: { id: id } })
        .then((data) => {
            if (!data) {
                res.sendStatus(404);
            }
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// get posts by user ID
/**
 * @param {number} id - user id
 * @param {object} res - response object
 */
const getPostsByUser = (id, res) => {
    Post.findAll({ where: { userId: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};


// uses JSON from request body to create new post in DB
/**
 * @param {object} data - post data
 * @param {object} res - response object
 */ 
const createPost = (data, res) => {
    Post.create(data)
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// update post in DB based on ID
/**
 * @param {number} id - post id
 * @param {object} data - post data
 * @param {object} res - response object
 */
const updatePost = (id, data, res) => {
    Post.update(data, { where: { id: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// delete post in DB based on ID
/**
 * @param {number} id - post id
 * @param {object} res - response object
 */
const deletePost = (id, res) => {
    Post.destroy({ where: { id: id } })
        .then((data) => {
            if (!data) {
                res.sendStatus(404);
            }
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// get user

module.exports = {
    getPost,
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getPostsByUser,
};

