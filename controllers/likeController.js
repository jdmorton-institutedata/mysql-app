const Like = require('../models/like');

// finds all likes in DB, then sends array as response
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
const updateLike = (id, data, res) => {
    Like.update(data, { where: { id: id } })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

// delete like in DB based on ID
const deleteLike = (id, res) => {
    Like.destroy({ where: { id: id } })
        .then((data) => {
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

