const express = require('express');
const router = express.Router();

const client = require('./../connection');

const player = require('./../models/player')(client);

const sendData =res => data => res.json(data);

router.get('/', (req, res, next) => {
    player.getAll()
        .then(sendData(res));
});

router.get('/:id', (req, res, next) => {
    player.get(req.params.id)
        .then(sendData(res));
});

module.exports = router;