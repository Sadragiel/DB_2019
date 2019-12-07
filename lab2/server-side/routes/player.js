const express = require('express');
const router = express.Router();

const client = require('./../connection');

const player = require('./../models/player')(client);

const sendData =res => data => res.json(data);

router.get('/', (req, res) => {
    player.getAll()
        .then(sendData(res));
});

router.get('/:id', (req, res) => {
    player.get(req.params.id)
        .then(sendData(res));
});

router.post('/', (req, res) => {
    const { entity: { login, money }} = req.body;

    player.insert({login, money}) 
        .then(id => player.get(id))
        .then(sendData(res));
});

router.put('/', (req, res) => {
    const { entity: { login, money, id } } = req.body;

    player.update({login, money, id}) 
        .then(id => player.get(id))
        .then(sendData(res));
});

router.delete('/:id', (req, res) => {
    player.delete(req.params.id) 
        .then(sendData(res));
});

module.exports = router;