const cs = 'postgres://postgres:1111@localhost:5432/Lab1'

const indexes = require('./indexes');
const trigger = require('./trigger');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(cs);

trigger(sequelize);
indexes(sequelize);

module.exports = sequelize;