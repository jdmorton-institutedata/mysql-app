const express = require('express');
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

/**
 * @swagger
 * /api/comments:
 *  post:
 *    description: Use to create a new comment
 *    tags:
 *      - Comments
 *    requestBody:
 *     content:
 *      application/json:
 *        schema:
 *          type: object
 *          properties:
 *           postId:
 *              type: integer
 *              description: ID of post to comment on
 *              example: 1
 *           userId:
 *             type: integer
 *             description: ID of user who commented on the post
 *             example: 1
 *           content:
 *             type: string
 *             description: Content of comment
 *             example: This is a comment   
 *    responses:
 *      '200':
 *          description: A successful response
 *      '500':
 *          description: Server error
 */
router.post('/', (req, res) => {
    // Logic to create a new comment
    commentController.createComment(req.body, res);
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
 *      '500':
 *          description: Server error
 */
router.put('/:id', (req, res) => {
    // Logic to update a specific comment by ID
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
