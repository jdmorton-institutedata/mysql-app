const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', (req, res) => {
    // Logic to fetch all comments using commentController
    commentController.getComments(res);
});

router.get('/:id', (req, res) => {
    // Logic to fetch a specific comment by ID
    commentController.getComment(req.params.id, res);
});

router.post('/', (req, res) => {
    // Logic to create a new comment
    commentController.createComment(req.body, res);
});

router.put('/:id', (req, res) => {
    // Logic to update a specific comment by ID
    commentController.updateComment(req.params.id, req.body, res);
});

router.delete('/:id', (req, res) => {
    // Logic to delete a specific comment by ID
    commentController.deleteComment(req.params.id, res);
});

module.exports = router;
