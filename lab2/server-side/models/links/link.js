const dao = require('./../dao/dao');

const tablename = 'public."PlayerDeckConection"';
const fields = [
    'login',
    'money'
];

module.exports =(tablename, linkFrom, linkTo) =>   client => ({
    ...dao(client, tablename, [linkFrom.field, linkTo.field])
})

