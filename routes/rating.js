const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/rating');

router.get('/', ratingController.index)

module.exports = router