const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// GET all comments
/**
 * @swagger
 * /comments:
 * get:
 * description: Use to request all comments
 * responses: 200
 * description: A successful response
 */
router.get('/', (req, res) => {
    // Logic to fetch all comments using commentController
    commentController.getComments(res);
});

// GET a specific comment
/**
 * @swagger
 * /comments/{id}:
 * get:
 * description: Use to request a specific comment
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the comment to get
 * schema:
 * type: integer
 * format: int64
 * responses: 200
 * description: A successful response
 */
router.get('/:id', (req, res) => {
    // Logic to fetch a specific comment by ID
    commentController.getComment(req.params.id, res);
});

// POST a new comment
/**
 * @swagger
 * /comments:
 * post:
 * description: Use to create a new comment
 * parameters:
 * - name: content
 * in: formData
 * required: true
 * description: Content of the comment
 * schema:
 * type: string
 * responses: 200
 * description: A successful response
 */
router.post('/', (req, res) => {
    // Logic to create a new comment
    commentController.createComment(req.body, res);
});

// PUT update a comment
/**
 * @swagger
 * /comments/{id}:
 * put:
 * description: Use to update a specific comment
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the comment to update
 * schema:
 * type: integer
 * format: int64
 * - name: content
 * in: formData
 * required: true
 * description: Content of the comment
 * schema:
 * type: string
 * responses: 200
 * description: A successful response
 */
router.put('/:id', (req, res) => {
    // Logic to update a specific comment by ID
    commentController.updateComment(req.params.id, req.body, res);
});

// DELETE a comment
/**
 * @swagger
 * /comments/{id}:
 * delete:
 * description: Use to delete a specific comment
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the comment to delete
 * schema:
 * type: integer
 * format: int64
 * responses: 200
 * description: A successful response
 */
router.delete('/:id', (req, res) => {
    // Logic to delete a specific comment by ID
    commentController.deleteComment(req.params.id, res);
});

module.exports = router;
