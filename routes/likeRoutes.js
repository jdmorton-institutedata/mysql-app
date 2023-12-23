const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

// GET /likes
router.get('/', (req, res) => likeController.getLikes(res));

// POST /likes
router.post('/', (req, res) => likeController.createLike(req.body, res));

// GET /likes/:id
router.get('/:id', (req, res) => likeController.getLike(req.params.id, res));

// PUT /likes/:id
router.put('/:id', (req, res) => likeController.updateLike(req.params.id, req.body, res));

// DELETE /likes/:id
router.delete('/:id', (req, res) => likeController.deleteLike(req.params.id, res));

module.exports = router;
