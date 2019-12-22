const sequelize = require('./../../connection');
const PlayerModel = require('./player')(sequelize);
const CardModel = require('./card')(sequelize);
const DeckModel = require('./deck')(sequelize);
const EffectModel = require('./effect')(sequelize);
const DeckCardLinkModel = require('./deck-card')(sequelize);
const PlayerCardLinkModel = require('./player-card')(sequelize);

const models = {
    PlayerModel, CardModel, 
    DeckModel, EffectModel,
    DeckCardLinkModel,
    PlayerCardLinkModel
};
[
    PlayerModel, CardModel, 
    DeckModel, EffectModel,
    DeckCardLinkModel,
    PlayerCardLinkModel
].forEach(model => model.associate && model.associate(models));

module.exports = models;