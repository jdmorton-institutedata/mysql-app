const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// GET /posts
/**
 * @swagger
 * /posts:
 * get:
 * description: Use to request all posts
 * responses: 200
 * description: A successful response
 */
router.get('/', (req, res) => {
    // Logic to fetch all posts
    postController.getPosts(res);
});

// GET /posts/:id
/**
 * @swagger
 * /posts/{id}:
 * get:
 * description: Use to request a specific post
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the post to get
 * schema:
 * type: integer
 * format: int64
 * responses: 200
 * description: A successful response
 */
router.get('/:id', (req, res) => {
    // Logic to fetch a specific post by ID
    postController.getPost(req.params.id, res);
});

// POST /posts
/**
 * @swagger
 * /posts:
 * post:
 * description: Use to create a new post
 * parameters:
 * - name: title
 * in: formData
 * required: true
 * description: Title of the post
 * schema:
 * type: string
 * - name: content
 * in: formData
 * required: true
 * description: Content of the post
 * schema:
 * type: string
 * responses: 200
 * description: A successful response
 */
router.post('/', (req, res) => {
    // Logic to create a new post
    postController.createPost(req.body, res);
});

// PUT /posts/:id
/**
 * @swagger
 * /posts/{id}:
 * put:
 * description: Use to update a specific post
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the post to update
 * schema:
 * type: integer
 * format: int64
 * - name: title
 * in: formData
 * required: true
 * description: Title of the post
 * schema:
 * type: string
 * - name: content
 * in: formData
 * required: true
 * description: Content of the post
 * schema:
 * type: string
 * responses: 200
 * description: A successful response
 */
router.put('/:id', (req, res) => {
    // Logic to update a specific post by ID
    postController.updatePost(req.params.id, req.body, res);
});

// DELETE /posts/:id
/**
 * @swagger
 * /posts/{id}:
 * delete:
 * description: Use to delete a specific post
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the post to delete
 * schema:
 * type: integer
 * format: int64
 * responses: 200
 * description: A successful response
 */
router.delete('/:id', (req, res) => {
    // Logic to delete a specific post by ID
    postController.deletePost(req.params.id, res);
});

module.exports = router;
