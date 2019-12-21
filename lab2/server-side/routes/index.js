const express = require('express');
const router = express.Router();

const player = require('./player');
const deck = require('./deck');
const card = require('./card');

router.use('/player', player);
router.use('/deck', deck);
router.use('/card', card);

module.exports = router;