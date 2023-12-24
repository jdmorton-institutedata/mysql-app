const express = require('express');
const {validationResult} = require('express-validator');
const { likeValidator, likeUpdateValidator } = require("../validators/likeValidator");
const router = express.Router();
const likeController = require('../controllers/likeController');

/**
 * @swagger
 * /api/likes:
 *  get:
 *    description: Use to request all likes
 *    tags:
 *      - Likes
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Like not found
 *      '500':
 *          description: Server error
 */
router.get('/', (req, res) => likeController.getLikes(res));

/**
 * @swagger
 * /api/likes/{id}:
 *  get:
 *    description: Use to request a like by ID
 *    tags:
 *      - Likes
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of like to fetch
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Like not found
 *      '500':
 *          description: Server error
 */
router.get('/:id', (req, res) => likeController.getLike(req.params.id, res));

/**
 * @swagger
 * /api/likes/post/{id}:
 *  get:
 *    description: Use to request likes by post ID
 *    tags:
 *      - Likes
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of post to fetch likes
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Like not found
 *      '500':
 *          description: Server error
 */
router.get('/post/:id', (req, res) => likeController.getLikesByPost(req.params.id, res));

/**
 * @swagger
 * /api/likes/user/{id}:
 *  get:
 *    description: Use to request likes by user ID
 *    tags:
 *      - Likes
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of user to fetch likes
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Like not found
 *      '500':
 *          description: Server error
 */
router.get('/user/:id', (req, res) => likeController.getLikesByUser(req.params.id, res));

/**
 * @swagger
 * /api/likes:
 *  post:
 *    description: Use to create a new like
 *    tags:
 *      - Likes
 *    requestBody:
 *     content:
 *      application/json:
 *        schema:
 *          type: object
 *          properties:
 *            postId:
 *              type: integer
 *              description: ID of post to like
 *              example: 1
 *            userId:
 *              type: integer
 *              description: ID of user who liked the post
 *              example: 1
 *    responses:
 *      '201':
 *          description: Like created successfully
 *      '400':
 *          description: Bad request
 *      '422':
 *        description: Validation error
 *      '500':
 *          description: Server error
 */
router.post('/', likeValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({ errors: errors.array() });
    } else {
        likeController.createLike(req.body, res);
    }
});

/**
 * @swagger
 * /api/likes/{id}:
 *  get:
 *    description: Use to request a like by ID
 *    tags:
 *      - Likes
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of like to fetch
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Like not found
 *      '500':
 *          description: Server error
 */
router.get('/:id', (req, res) => likeController.getLike(req.params.id, res));

/**
 * @swagger
 * /api/likes/{id}:
 *  put:
 *    description: Use to update a like
 *    tags:
 *      - Likes
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of like to update
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    requestBody:
 *     content:
 *      application/json:
 *        schema:
 *          type: object
 *          properties:
 *            postId:
 *              type: integer
 *              description: ID of post to like
 *              example: 1
 *            userId:
 *              type: integer
 *              description: ID of user who liked the post
 *              example: 1
 *    responses:
 *      '200':
 *          description: Like updated successfully
 *      '400':
 *          description: Bad request
 *      '404':
 *          description: Like not found
 *      '422':
 *         description: Validation error
 *      '500':
 *          description: Server error
 */
router.put('/:id', likeUpdateValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({ errors: errors.array() });
    } else {
        likeController.updateLike(req.params.id, req.body, res);
    }
});

/**
 * @swagger
 * /api/likes/{id}:
 *  delete:
 *    description: Use to delete a like by ID
 *    tags:
 *      - Likes
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of like to delete
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: Like deleted successfully
 *      '404':
 *          description: Like not found
 *      '500':
 *          description: Server error
 */
router.delete('/:id', (req, res) => {   
    likeController.deleteLike(req.params.id, res)
});

module.exports = router;
