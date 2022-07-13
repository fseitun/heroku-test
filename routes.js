const express = require('express');
const router = express.Router();
const { getAll } = require('./controllers');

router.get('/:id/:favoriteNumber', getAll);

module.exports = router;
