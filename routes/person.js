const express = require('express');
const router = express.Router();
const personController = require('../controllers/person');

router.get('/', personController.index)
router.get('/name/:name', personController.show)

module.exports = router