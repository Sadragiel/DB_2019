const { CardModel, PlayerModel } = require('./models');
const crud = require('./crud');

module.exports = {
    card: function(title, description, manacost, atk, def, artefact, spell) {
        this.title = title;
        this.description = description;
        this.manacost = manacost;
        this.atk = atk;
        this.def = def;
        this.artefact = artefact;
        this.spell = spell;
        this.creationDate = Date.now();
    },
    ...crud(CardModel),
    getByOwner: (owner) =>
        PlayerModel.findOne({
            where: {id: owner},
            include: [CardModel]
        })
        .then(player => player.toJSON().Cards)
            .catch(console.log),
};
