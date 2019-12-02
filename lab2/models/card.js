const dao = require('./dao/dao');

const tablename = 'public."Card"';
const fields = [
    'title',
    'description',
    'manacost',
    'atk',
    'def',
    'artefact',
    'spell'
];

module.exports = client => ({
    ...dao(client, tablename, fields),
    player: function(title, description, manacost, atk, def, artefact, spell) {
        this.title = title;
        this.description = description;
        this.manacost = manacost;
        this.atk = atk;
        this.def = def;
        this.artefact = artefact;
        this.spell = spell;
    }
})