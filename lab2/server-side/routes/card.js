const express = require('express');
const router = express.Router();

const client = require('./../connection');

const card = require('./../models/card')(client);
const link = require('./../models/links/player-card')(client);

const sendData =res => data => res.json(data);

router.get('/', (req, res) => {
    console.log('req.query.owner', req.query.owner)
    if(req.query.owner) {
        card.getByOwner(req.query.owner)
            .then(data => data.map(item => ({...item, owner: req.query.owner})))
            .then(sendData(res));
    }
    else{
        card.getAll()
            .then(sendData(res));
    }
});


router.get('/search', (req, res) => {
    console.log('search',req.query.search )
    card.fullTextSearch(req.query.search)
        .then(sendData(res));
});

router.get('/:id', (req, res) => {
    card.get(req.params.id)
        .then(sendData(res));
});

// router.post('/', (req, res) => {
//     const { entity} = req.body;
//     console.log('post', entity)

//     deck.insert(entity) 
//         .then(id => deck.get(id))
//         .then(sendData(res));
// });

router.post('/player', (req, res) => {
    const { cardLink } = req.body;
    link.insert(cardLink)
        .then(sendData(res));
})

// router.post('/deck', (req, res) => {
//     const { cardLink } = req.body;
//     link.insert(cardLink)
//         .then(sendData(res));
// })

// router.put('/', (req, res) => {
//     const { entity } = req.body;

//     deck.update(entity) 
//         .then(id => deck.get(id))
//         .then(sendData(res));
// });

router.delete('/:owner', (req, res) => {
    link.deleteByOwner(req.params.owner) 
        .then(sendData(res));
});



module.exports = router;