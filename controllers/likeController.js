const Like = require('../models/like');

// finds all likes in DB, then sends array as response
/**
 * @param {object} res - response object
 */
const getLikes = (res) => {
    Like.findAll({})
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// get single like
/**
 * @param {number} id - like id
 * @param {object} res - response object
 */
const getLike = (id, res) => {
    Like.findOne({ where: { id: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// get likes by post ID
/**
 * @param {number} id - post id
 * @param {object} res - response object
 */
const getLikesByPost = (id, res) => {
    Like.findAll({ where: { postId: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });

        });
};

// get likes by user ID
/**
 * @param {number} id - user id
 * @param {object} res - response object
 */
const getLikesByUser = (id, res) => {
    Like.findAll({ where: { userId: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// uses JSON from request body to create new like in DB
/**
 * @param {object} data - like data
 * @param {object} res - response object
 */
const createLike = (data, res) => {
    Like.create(data)
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// update like in DB based on ID
/**
 * @param {number} id - like id
 * @param {object} data - like data
 * @param {object} res - response object
 */
const updateLike = (id, data, res) => {
    Like.update(data, { where: { id: id } })
        .then((data) => {
            if (!data) {
                res.send({ result: 404, message: "Like not found" });
            }
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// delete like in DB based on ID
/**
 * @param {number} id - like id
 * @param {object} res - response object
 */
const deleteLike = (id, res) => {
    Like.destroy({ where: { id: id } })
        .then((data) => {
            if (!data) {
                res.send({ result: 404, message: "Like not found" });
            }
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getLikes,
    createLike,
    updateLike,
    deleteLike,
    getLike,
    getLikesByPost,
    getLikesByUser,
};

