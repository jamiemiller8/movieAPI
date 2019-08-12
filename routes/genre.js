const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genre');

router.get('/', genreController.index)
router.get('/name/:name', genreController.show)

module.exports = router