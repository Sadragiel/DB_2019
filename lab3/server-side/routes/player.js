const express = require('express');
const router = express.Router();

const player = require('./../models/player');

const link = require('./../models/links/player-card');

const sendData = res => data => res.json(data);

router.get('/', (req, res) => {
    player.getAll()
        .then(sendData(res));
});

router.get('/search', (req, res) => {
    player.parametrizedSearch(req.query.maney_from, req.query.maney_to)
        .then(sendData(res));
});

router.get('/:id', (req, res) => {
    player.get(req.params.id)
        .then(sendData(res));
});



router.post('/', (req, res) => {
    const { entity: { login, money }} = req.body;

    player.insert({login, money}) 
        .then(sendData(res));
});

router.put('/', (req, res) => {
    const { entity: { login, money, id } } = req.body;

    player.update({login, money, id}) 
        .then(sendData(res));
});

router.delete('/:id', (req, res) => {
    player.delete(req.params.id) 
        .then(sendData(res));
});

module.exports = router;