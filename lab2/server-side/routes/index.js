const express = require('express');
const router = express.Router();

const player = require('./player');
const deck = require('./deck');

router.use('/player', player);
router.use('/deck', deck);

module.exports = router;