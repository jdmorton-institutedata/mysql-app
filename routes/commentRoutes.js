const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// GET all comments
router.get('/', (req, res) => {
    // Logic to fetch all comments using commentController
    commentController.getComments(res);
});

// GET a specific comment
router.get('/:id', (req, res) => {
    // Logic to fetch a specific comment by ID
    commentController.getComment(req.params.id, res);
});

// POST a new comment
router.post('/', (req, res) => {
    // Logic to create a new comment
    commentController.createComment(req.body, res);
});

// PUT update a comment
router.put('/:id', (req, res) => {
    // Logic to update a specific comment by ID
    commentController.updateComment(req.params.id, req.body, res);
});

// DELETE a comment
router.delete('/:id', (req, res) => {
    // Logic to delete a specific comment by ID
    commentController.deleteComment(req.params.id, res);
});

module.exports = router;
