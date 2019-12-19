const dao = require('./../dao/dao');

const tablename = 'public."player-card"';
const fields = [
    'cid',
    'pid'
];

module.exports = client => ({
    ...dao(client, tablename, fields),
    player_card: function(cid, pid) {
        this.pid = pid;
        this.cid = cid; 
    },

    deleteByOwner: owner => 
        client.query({
            name: `${tablename}-delete`,
            text: `
                delete from ${tablename}
                where pid=$1
            `,
            values: [owner]
        })
            .then(res => !!res.rowCount)
            .catch(console.log)
}) 