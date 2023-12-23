const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// GET /posts
router.get('/', (req, res) => {
    // Logic to fetch all posts
    postController.getPosts(res);
});

// GET /posts/:id
router.get('/:id', (req, res) => {
    // Logic to fetch a specific post by ID
    postController.getPost(req.params.id, res);
});

// POST /posts
router.post('/', (req, res) => {
    // Logic to create a new post
    postController.createPost(req.body, res);
});

// PUT /posts/:id
router.put('/:id', (req, res) => {
    // Logic to update a specific post by ID
    postController.updatePost(req.params.id, req.body, res);
});

// DELETE /posts/:id
router.delete('/:id', (req, res) => {
    // Logic to delete a specific post by ID
    postController.deletePost(req.params.id, res);
});

module.exports = router;
