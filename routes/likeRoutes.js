const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

router.get('/', (req, res) => likeController.getLikes(res));

router.post('/', (req, res) => likeController.createLike(req.body, res));

router.get('/:id', (req, res) => likeController.getLike(req.params.id, res));

router.put('/:id', (req, res) => likeController.updateLike(req.params.id, req.body, res));

router.delete('/:id', (req, res) => likeController.deleteLike(req.params.id, res));

module.exports = router;
