const express = require('express');
const router = express.Router();

const player = require('./player');

router.use('/player', player);

module.exports = router;