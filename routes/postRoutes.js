const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', (req, res) => {
    // Logic to fetch all posts
    postController.getPosts(res);
});

router.get('/:id', (req, res) => {
    // Logic to fetch a specific post by ID
    postController.getPost(req.params.id, res);
});

router.post('/', (req, res) => {
    // Logic to create a new post
    postController.createPost(req.body, res);
});

router.put('/:id', (req, res) => {
    // Logic to update a specific post by ID
    postController.updatePost(req.params.id, req.body, res);
});

router.delete('/:id', (req, res) => {
    // Logic to delete a specific post by ID
    postController.deletePost(req.params.id, res);
});

module.exports = router;
