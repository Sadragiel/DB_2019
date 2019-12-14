const express = require('express');
const router = express.Router();

const client = require('./../connection');

const deck = require('./../models/deck')(client);
const link = require('./../models/links/player-deck')(client);

const sendData =res => data => res.json(data);

router.get('/', (req, res) => {
    console.log('req.query.owner', req.query.owner)
    if(req.query.owner) {
        deck.getByOwner(req.query.owner)
            .then(sendData(res));
    }
    else{
        deck.getAll()
            .then(sendData(res));
    }
});

router.get('/:id', (req, res) => {
    deck.get(req.params.id)
        .then(sendData(res));
});

router.post('/', (req, res) => {
    const { entity} = req.body;
    console.log('post', entity)

    deck.insert(entity) 
        .then(id => deck.get(id))
        .then(sendData(res));
});

router.put('/', (req, res) => {
    const { entity } = req.body;

    deck.update(entity) 
        .then(id => deck.get(id))
        .then(sendData(res));
});

router.delete('/:id', (req, res) => {
    deck.delete(req.params.id) 
        .then(sendData(res));
});

module.exports = router;