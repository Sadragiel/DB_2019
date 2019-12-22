const pg = require('pg');
const cs = 'postgres://postgres:1111@localhost:5432/Lab1'

const Sequelize = require('sequelize');
const sequelize = new Sequelize(cs);

module.exports = sequelize;