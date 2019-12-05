const dao = require('./dao/dao');

const tablename = 'public."Deck"';
const fields = [
    'title',
    'rotate'
];

module.exports = client => ({
    ...dao(client, tablename, fields),
    deck: function(title, rotate) {
        this.title = title;
        this.rotate = rotate;
    }
})