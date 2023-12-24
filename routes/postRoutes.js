const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

/**
 * @swagger
 * /api/posts:
 *  get:
 *    description: Use to request all posts
 *    tags:
 *      - Posts
 *    responses:
 *      '200':  
 *          description: A successful response
 *      '404':
 *          description: Post not found
 *      '500':
 *          description: Server error
 */
router.get('/', (req, res) => {
    postController.getPosts(res);
});

/**
 * @swagger
 * /api/posts/{id}:
 *  get:
 *    description: Use to request a post by ID
 *    tags:
 *      - Posts
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of post to fetch
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Post not found
 *      '500':
 *          description: Server error
 */
router.get('/:id', (req, res) => {
    // Logic to fetch a specific post by ID
    postController.getPost(req.params.id, res);
});

/**
 * @swagger
 * /api/posts/user/{id}:
 *  get:
 *    description: Use to request all posts by user ID
 *    tags:
 *      - Posts
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of user to fetch posts from
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Post not found
 *      '500':
 *          description: Server error
 */
router.get('/user/:id', (req, res) => {
    // Logic to fetch all posts by user ID
    postController.getPostsByUser(req.params.id, res);
});

/**
 * @swagger
 * /api/posts:
 *  post:
 *    description: Use to create a new post
 *    tags:
 *     - Posts
 *    requestBody:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        required:
 *         - title
 *         - content
 *         - userId
 *        properties:
 *          title:
 *              type: string
 *          content:
 *              type: string
 *          userId:
 *              type: integer
 *              example: 1
 *    responses:
 *       '200':
 *          description: A successful response
 *       '404':
 *          description: Post not found
 *       '500':
 *          description: Server error
 */
router.post('/', (req, res) => {
    // Logic to create a new post
    postController.createPost(req.body, res);
});

/**
 * @swagger
 * /api/posts/{id}:
 *  put:
 *    description: Use to update a post by ID
 *    tags:
 *      - Posts
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of post to update
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    requestBody:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        required:
 *         - title
 *         - content
 *         - userId
 *        properties:
 *          title:
 *              type: string
 *          content:
 *              type: string
 *          userId:
 *              type: integer
 *              example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Post not found
 *      '500':
 *          description: Server error
 */
router.put('/:id', (req, res) => {
    // Logic to update a specific post by ID
    postController.updatePost(req.params.id, req.body, res);
});

/**
 * @swagger
 * /api/posts/{id}:
 *  delete:
 *    description: Use to delete a post by ID
 *    tags:
 *      - Posts
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of post to delete
 *        required: true
 *        type: integer
 *        minimum: 1
 *        example: 1
 *    responses:
 *      '200':
 *          description: A successful response
 *      '404':
 *          description: Post not found
 *      '500':
 *          description: Server error
 */
router.delete('/:id', (req, res) => {
    // Logic to delete a specific post by ID
    postController.deletePost(req.params.id, res);
});

module.exports = router;
