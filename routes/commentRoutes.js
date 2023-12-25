const express = require('express');
const {validationResult} = require('express-validator');
const { commentValidator, commentUpdateValidator } = require("../validators/commentValidator");
const router = express.Router();
const commentController = require('../controllers/commentController');

/**
 * @swagger
 * /api/comments:
 *  get:
 *    description: Use to request all comments
 *    tags:
 *      - Comments
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Comment not found
 *      '500':
 *          description: Server error
 */
router.get('/', (req, res) => {
    // Logic to fetch all comments using commentController
    commentController.getComments(res);
});

/**
 * @swagger
 * /api/comments/{id}:
 *  get:
 *    description: Use to request a comment by ID
 *    tags:
 *      - Comments
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of comment to fetch
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Comment not found
 *      '500':
 *          description: Server error
 */
router.get('/:id', (req, res) => {
    // Logic to fetch a specific comment by ID
    commentController.getComment(req.params.id, res);
});

// get single comment include all
/**
 * @swagger
 * /api/comments/{id}/include:
 *  get:
 *    description: Use to request a comment by ID with all associations
 *    tags:
 *      - Comments
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of comment to fetch
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Comment not found
 *      '500':
 *          description: Server error
 */
router.get('/:id/include', (req, res) => {
    // Logic to fetch a specific comment by ID with all associations
    commentController.getCommentIncludeAll(req.params.id, res);
});


/**
 * @swagger
 * /api/comments:
 *  post:
 *    description: Use to create a comment
 *    tags:
 *      - Comments
 *    requestBody:
 *     content:
 *      application/json:
 *        schema:
 *          type: object
 *          properties:
 *           postId:
 *             type: integer
 *             description: ID of post to comment on
 *             example: 1
 *           userId:
 *            type: integer
 *            description: ID of user who commented on the post
 *            example: 1
 *           content:
 *            type: string
 *            description: Content of comment
 *            example: This is a comment 
 *    responses:
 *      '200':
 *          description: A successful response
 *      '422':
 *         description: Invalid input
 *      '500':
 *          description: Server error
 */
router.post('/', commentValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({ errors: errors.array() });
    } else  {
        commentController.createComment(req.body, res);
    }
});

// get comments by post id
/**
 * @swagger
 * /api/comments/post/{id}:
 *  get:
 *    description: Use to request all comments by post id
 *    tags:
 *      - Comments
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of post to fetch comments
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Comment not found
 *      '500':
 *          description: Server error
 */
router.get('/post/:id', (req, res) => {
    commentController.getCommentsByPostId(req.params.id, res);
});

/**
 * @swagger
 * /api/comments/user/{id}:
 *  get:
 *    description: Use to request all comments by user id
 *    tags:
 *      - Comments
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of user to fetch comments
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Comment not found
 *      '500':
 *          description: Server error
 */
router.get('/user/:id', (req, res) => {
    commentController.getCommentsByUserId(req.params.id, res);
});


/**
 * @swagger
 * /api/comments/{id}:
 *  put:
 *    description: Use to update a comment by ID
 *    tags:
 *      - Comments
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of comment to update
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
 *           postId:
 *             type: integer
 *             description: ID of post to comment on
 *             example: 1
 *           userId:
 *            type: integer
 *            description: ID of user who commented on the post
 *            example: 1
 *           content:
 *            type: string
 *            description: Content of comment
 *            example: This is a comment 
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Comment not found
 *      '422':
 *         description: Invalid input
 *      '500':
 *          description: Server error
 */
router.put('/:id', commentUpdateValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({ errors: errors.array() });
    }
    commentController.updateComment(req.params.id, req.body, res);
});

/**
 * @swagger
 * /api/comments/{id}:
 *  delete:
 *    description: Use to delete a comment by ID
 *    tags:
 *      - Comments
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of comment to delete
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Comment not found
 *      '500':
 *          description: Server error
 */
router.delete('/:id', (req, res) => {
    // Logic to delete a specific comment by ID
    commentController.deleteComment(req.params.id, res);
});

module.exports = router;
