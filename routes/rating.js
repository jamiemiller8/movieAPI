const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/rating');

router.get('/', ratingController.index)
// router.get('/name/:name', ratingController.show)

module.exports = router