const dao = require('./../dao/dao');

const tablename = 'public."PlayerDeckConection"';
const fields = [
    'login',
    'money'
];

module.exports =(tablename, linkFrom, linkTo)  client => ({
    ...dao(client, tablename, fields),
    player: function(login, money) {
        this.login = login;
        this.money = money;
    }
})