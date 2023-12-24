const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @swagger
 * /users:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/", (req, res) => {
  userController.getUsers(res);
});

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    description: Use to request a user by ID
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
 */
router.get("/:id", (req, res) => {
  userController.getUser(req.params.id, res);
});

/**
 * @swagger
 * /users:
 *  post:
 *    description: Use to create a new user
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
 *  responses:
 *   '200':
 *    description: A successful response
 */
router.post("/", (req, res) => {
  console.log(req.body, "req.body");
  userController.createUser(req.body, res);
});

// generate jsdoc yaml comment with correct indenting
/**
 * @swagger
 * /users/{id}:
 *  put:
 *    description: Use to update a user by ID
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
 * responses:
 *  '200':
 *   description: A successful response
 */
router.put("/:id", (req, res) => {
  userController.updateUser(req.params.id, req.body, res);
});

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    description: Use to delete a user by ID
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of user to delete
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *  responses:
 *   '200':
 *    description: A successful response
 */
router.delete("/:id", (req, res) => {
  // Logic to delete a specific user by ID
  userController.deleteUser(req.params.id, res);
});

module.exports = router;
