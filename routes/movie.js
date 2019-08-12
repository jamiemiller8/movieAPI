const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie');

router.get('/', movieController.index)
router.get('/name/:name', movieController.show)
router.post('/', movieController.create)
router.put('/:name', movieController.update)
router.delete('/:name', movieController.delete)

module.exports = router