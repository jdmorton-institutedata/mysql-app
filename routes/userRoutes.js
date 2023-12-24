const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /users
/**
 * @swagger
 * /users:
 * get:
 * description: Use to request all users
 * responses: 200
 * description: A successful response
 */
router.get('/', (req, res) => {
    // Logic to fetch all users using userController
    userController.getUsers(res);
});

// GET /users/:id
/**
 * @swagger
 * /users/{id}:
 * get:
 * description: Use to request a specific user
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the user to get
 * schema:
 * type: integer
 * format: int64
 * responses: 200
 * description: A successful response
 */
router.get('/:id', (req, res) => {
    // Logic to fetch a specific user by ID
    userController.getUser(req.params.id, res);
});

// POST /users
/**
 * @swagger
 * /users:
 * post:
 * description: Use to create a new user
 * parameters:
 * - name: name
 * in: formData
 * required: true
 * description: Name of the user
 * schema:
 * type: string
 * responses: 200
 * description: A successful response
 */
router.post('/', (req, res) => {
    // Logic to create a new user
    userController.createUser(req.body, res);
});

// PUT /users/:id
/**
 * @swagger
 * /users/{id}:
 * put:
 * description: Use to update an existing user
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the user to update
 * schema:
 * type: integer
 * format: int64
 * - name: name
 * in: formData
 * required: true
 * description: Name of the user
 * schema:
 * type: string
 * responses: 200
 * description: A successful response
 */
router.put('/:id', (req, res) => {
    // Logic to update a specific user by ID
    userController.updateUser(req.params.id, req.body, res);
});

// DELETE /users/:id
/**
 * @swagger
 * /users/{id}:
 * delete:
 * description: Use to delete an existing user
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the user to delete
 * schema:
 * type: integer
 * format: int64
 * responses: 200
 * description: A successful response
 */
router.delete('/:id', (req, res) => {
    // Logic to delete a specific user by ID
    userController.deleteUser(req.params.id, res);
});

module.exports = router;
