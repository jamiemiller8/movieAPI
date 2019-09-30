const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie');

router.get('/', movieController.index)
router.get('/title/:title', movieController.show)
router.post('/', movieController.create)
router.put('/:title', movieController.update)
router.delete('/:title', movieController.delete)

module.exports = router