const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

// GET /likes
/**
 * @swagger
 * /likes:
 * get:
 * description: Use to request all likes
 * responses: 200
 * description: A successful response
 */
router.get('/', (req, res) => likeController.getLikes(res));

// POST /likes
/**
 * @swagger
 * /likes:
 * post:
 * description: Use to create a new like
 * parameters:
 * - name: user_id
 * in: formData
 * required: true
 * description: User ID of the like
 * schema:
 * type: integer
 * - name: post_id
 * in: formData
 * required: true
 * description: Post ID of the like
 * schema:
 * type: integer
 * responses: 200
 * description: A successful response
 */
router.post('/', (req, res) => likeController.createLike(req.body, res));

// GET /likes/:id
/**
 * @swagger
 * /likes/{id}:
 * get:
 * description: Use to request a specific like
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the like to get
 * schema:
 * type: integer
 * format: int64
 * responses: 200
 * description: A successful response
 */
router.get('/:id', (req, res) => likeController.getLike(req.params.id, res));

// PUT /likes/:id
/**
 * @swagger
 * /likes/{id}:
 * put:
 * description: Use to update a like
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the like to update
 * schema:
 * type: integer
 * format: int64
 * - name: user_id
 * in: formData
 * required: true
 * description: User ID of the like
 * schema:
 * type: integer
 * - name: post_id
 * in: formData
 * required: true
 * description: Post ID of the like
 * schema:
 * type: integer
 * responses: 200
 * description: A successful response
 */
router.put('/:id', (req, res) => likeController.updateLike(req.params.id, req.body, res));

// DELETE /likes/:id
/**
 * @swagger
 * /likes/{id}:
 * delete:
 * description: Use to delete a like
 * parameters:
 * - name: id
 * in: path
 * required: true
 * description: Numeric ID of the like to delete
 * schema:
 * type: integer
 * format: int64
 * responses: 200
 * description: A successful response
 */
router.delete('/:id', (req, res) => likeController.deleteLike(req.params.id, res));

module.exports = router;
