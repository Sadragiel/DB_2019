const dao = require('./dao/dao');

const tablename = 'public."Deck"';
const fields = [
    'title',
    'rotate',
    'owner'
];

module.exports = client => ({
    ...dao(client, tablename, fields),
    deck: function(title, rotate) {
        this.title = title;
        this.rotate = rotate;
    },

    getByOwner: (owner) => 
        client.query({
            name: 'deck-get-by-owner',
            text: `
                select * 
                from ${tablename}
                where owner=$1
            `,
            values: [owner]
        })
        .then(res => res.rows || [])
        .catch(console.log),
})