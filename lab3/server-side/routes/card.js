const express = require('express');
const router = express.Router();
const card = require('./../models/card');
const link = require('./../models/links/player-card');

const sendData = res => data => res.json(data);

const randomStr = () => Math.random().toString(36).substring(7);
const randomNumber = (enchancer = 1) => Math.floor(Math.random() * enchancer);

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

function recursiveRandomCreation(counter) {
    if(counter < 0)
        return;
    setTimeout(async () => {
        const type = ['follower', 'art', 'spell'][randomNumber(2)];
        const cardInstance = new card.card(
            `CardTitle_${randomStr()}`,
            `CardDescription_${randomStr()}`,
            randomNumber(20),
            randomNumber(20),
            randomNumber(20),
            type === 'art',
            type === 'spell',
        );
        await card.insert(cardInstance);
        recursiveRandomCreation(counter - 1);
    }, 5);
}

router.get('/:id', (req, res) => {
    card.get(req.params.id)
        .then(sendData(res));
});

router.post('/random', async (req, res) => {
    recursiveRandomCreation(req.query.count);
    res.sendStatus(200);
})

router.post('/player', (req, res) => {
    const { cardLink } = req.body;
    link.insert(cardLink)
        .then(sendData(res));
})

router.delete('/:owner', (req, res) => {
    link.deleteByOwner(req.params.owner) 
        .then(sendData(res));
});



module.exports = router;