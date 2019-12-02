const pg = require('pg');
const Player = require('./models/player');

const cs = 'postgres://postgres:1111@localhost:5432/Lab1'

const client = new  pg.Client(cs);

client.connect();

const player = Player(client);
player.getAll()
    .then(console.log)
    .finally(() => client.end());