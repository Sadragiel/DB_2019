const pg = require('pg');
const cs = 'postgres://postgres:1111@localhost:5432/Lab1'

const client = new  pg.Client(cs);

module.exports = client;