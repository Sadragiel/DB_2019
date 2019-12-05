const express = require('express');
const router = express.Router();

const client = require('./../connection');

const player = require('./../models/player')(client);

const sendData =res => data => res.json(JSON.stringify(data));

router.get('/', (req, res, next) => {
    player.getAll()
        .then(sendData(res));
});

module.exports = router;