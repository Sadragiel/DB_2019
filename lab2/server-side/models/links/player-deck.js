const dao = require('./../dao/dao');

const tablename = 'public."deck-player"';
const fields = [
    'did',
    'pid'
];

module.exports = client => ({
    ...dao(client, tablename, fields),
    player_deck: function(did, pid) {
        this.pid = pid;
        this.did = did; 
    }
}) 