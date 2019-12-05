const dao = require('./dao/dao');

const tablename = 'public."Player"';
const fields = [
    'login',
    'money'
];

module.exports = client => ({
    ...dao(client, tablename, fields),
    player: function(login, money) {
        this.login = login;
        this.money = money;
    }
})