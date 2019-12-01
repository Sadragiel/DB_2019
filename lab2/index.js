const pg = require('pg');
const R = require('ramda');
const Player = require('./models/player');

const cs = 'postgres://postgres:1111@localhost:5432/Lab1'

const client = new  pg.Client(cs);



client.connect();

// const query = {
//     // give the query a unique name
//     name: 'fetch-user',
//     text: 'SELECT * FROM user WHERE id = $1',
//     values: [1],
//   }

// client.query('SELECT * FROM public.hero').then(res => {

//     // const result = R.head(R.values(R.head(res.rows)));

//     console.log(res);
// }).finally(() => client.end());


const player = Player(client);
player.get()
    .then(console.log)
    .then(() => player.add({login: 'node_login', money: 111 }))
    .then(id => player.get(id))
    .then(console.log)
    .finally(() => client.end());