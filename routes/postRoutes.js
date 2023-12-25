const express = require('express');
const {validationResult} = require('express-validator');
const { postValidator, postUpdateValidator, postParamValidator } = require("../validators/postValidator");
const router = express.Router();
const postController = require('../controllers/postController');
const e = require('express');

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
 *      '422':
 *        description: Validation error
 *      '500':
 *          description: Server error
 */
router.get('/:id', postParamValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    } else {
        postController.getPost(req.params.id, res);
    }
});

// get single post include all
/**
 * @swagger
 * /api/posts/{id}/include:
 *  get:
 *    description: Use to request a post by ID with all associations
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
 *      '422':
 *        description: Validation error
 *      '500':
 *          description: Server error
 */
router.get('/:id/include', postParamValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    } else {
        postController.getPostIncludeAll(req.params.id, res);
    }
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
 *      '422':
 *        description: Validation error
 *      '500':
 *          description: Server error
 */
router.get('/user/:id', postParamValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    } else {
        postController.getPostsByUser(req.params.id, res);
    }
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
 *       '422':
 *         description: Validation error
 *       '500':
 *          description: Server error
 */
router.post('/', postValidator, (req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        postController.createPost(req.body, res);
    } else {
        res.status(422).json({ errors: errors.array() });
    }
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
 *      '422':
 *         description: Validation error
 *      '500':
 *          description: Server error
 */
router.put('/:id', postUpdateValidator, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    } else {
        postController.updatePost(req.params.id, req.body, res);
    }
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
 *      '422':
 *        description: Validation error
 *      '500':
 *          description: Server error
 */
router.delete('/:id', (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        postController.deletePost(req.params.id, res);
    } else {
        res.status(422).json({ errors: errors.array() });
    }
});

module.exports = router;
