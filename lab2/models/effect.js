const dao = require('./dao/dao');

const tablename = 'public."Effect"';
const fields = [
    'aim',
    'bonus',
    'type',
    'activatable'
];

module.exports = client => ({
    ...dao(client, tablename, fields),
    effect: function(aim, bonus, type, activatable) {
        this.aim = aim;
        this.bonus = bonus;
        this.type = type;
        this.activatable = activatable;
    }
})