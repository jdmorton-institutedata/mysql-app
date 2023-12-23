const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /users
router.get('/', (req, res) => {
    // Logic to fetch all users using userController
    userController.getUsers(res);
});

// GET /users/:id
router.get('/:id', (req, res) => {
    // Logic to fetch a specific user by ID
    userController.getUser(req.params.id, res);
});

// POST /users
router.post('/', (req, res) => {
    // Logic to create a new user
    userController.createUser(req.body, res);
});

// PUT /users/:id
router.put('/:id', (req, res) => {
    // Logic to update a specific user by ID
    userController.updateUser(req.params.id, req.body, res);
});

// DELETE /users/:id
router.delete('/:id', (req, res) => {
    // Logic to delete a specific user by ID
    userController.deleteUser(req.params.id, res);
});

module.exports = router;
