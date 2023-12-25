const express = require("express");
const {validationResult} = require('express-validator');
const { userValidator, userUpdateValidator, userParamValidator } = require("../validators/userValidator");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * /api/users:
 *  get:
 *    description: Use to request all users
 *    tags:
 *      - Users
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: User not found
 *      '500':
 *        description: Server error
 */
router.get("/", (req, res) => {
  userController.getUsers(res);
});

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    description: Use to request a user by ID
 *    tags:
 *      - Users
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of user to fetch
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: User not found
 *      '422':
 *        description: Validation error
 *      '500':
 *        description: Server error
 */
router.get("/:id", userParamValidator, (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    userController.getUser(req.params.id, res);
  }
  else {
    res.status(422).json({errors: errors.array()});
  }
});

/**
 * @swagger
 * /api/users:
 *  post:
 *    description: Use to create a new user
 *    tags:
 *      - Users
 *    requestBody:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        required:
 *         - name
 *         - email
 *         - password
 *        properties:
 *         name:
 *          type: string
 *          example: John Doe
 *         email:
 *          type: string
 *          example: john@dudes.com
 *         password:
 *          type: string
 *          example: password
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: User not found
 *      '422':
 *        description: Validation error
 *      '500':
 *        description: Server error
 */
router.post("/", userValidator, (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    userController.createUser(req.body, res);
  } else {
    res.status(422).json({errors: errors.array()})
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    description: Use to update a user by ID
 *    tags:
 *      - Users
 *    requestBody:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        required:
 *         - name
 *         - email
 *         - password
 *        properties:
 *         name:
 *          type: string
 *          example: John Doe
 *         email:
 *          type: string
 *          example: john@dudes.com
 *         password:
 *          type: string
 *          example: password
 *    parameters:
 *     - name: id
 *       in: path
 *       description: ID of user to update
 *       required: true
 *       type: integer
 *       minimum: 1
 *       example: 1
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: User not found
 *      '422':
 *        description: Validation error
 *      '500':
 *        description: Server error
 */
router.put("/:id", userUpdateValidator, (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    userController.updateUser(req.params.id, req.body, res);
  } else {
    res.status(422).json({errors: errors.array()});
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    description: Use to delete a user by ID
 *    tags:
 *      - Users
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of user to delete
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: User not found
 *      '422':
 *        description: Validation error
 *      '500':
 *        description: Server error
 */
router.delete("/:id", userParamValidator, (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    userController.deleteUser(req.params.id, res);
  }
  else {
    res.status(422).json({errors: errors.array()});
  }
});

module.exports = router;
