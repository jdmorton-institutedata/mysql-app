const User = require("../models/user");

// finds all users in DB, then sends array as response
/**
 * @param {object} res - response object
 */
const getUsers = (res) => {
  User.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// get single user
/**
 * @param {number} id - user id
 * @param {object} res - response object
 */
const getUser = (id, res) => {
  User.findOne({ where: { id: id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to create new user in DB
/**
 * @param {object} data - user data
 * @param {object} res - response object
 */
const createUser = (data, res) => {
  User.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// update user in DB based on ID
/**
 * @param {number} id - user id
 * @param {object} data - user data
 * @param {object} res - response object
 */
const updateUser = (id, data, res) => {
  User.update(data, { where: { id: id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//delete user in DB based on ID
/**
 * @param {number} id - user id
 * @param {object} res - response object
 */
const deleteUser = (id, res) => {
  User.destroy({ where: { id: id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// exports functions for use in routes
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};

