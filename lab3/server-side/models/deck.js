const { DeckModel } = require('./models');
const crud = require('./crud');

module.exports = {
    ...crud(DeckModel),
    deck: function(title, rotate) {
        this.title = title;
        this.rotate = rotate;
    },
    getByOwner: owner => 
        DeckModel.findAll({ where: {owner} })
            .catch(console.log),
};