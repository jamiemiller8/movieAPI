const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review');

router.get('/', reviewController.index)
// router.get('/name/:name', reviewController.show)

module.exports = router