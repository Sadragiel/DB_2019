const Sequelize = require('sequelize');
const tablename = 'Deck';
const fields = {
    title: {
        type: Sequelize.STRING,
    },
    owner: {
        type: Sequelize.NUMBER,
    },
    cost: {
        type: Sequelize.NUMBER,
    },
    rotate: {
        type: Sequelize.BOOLEAN,
    },
};

module.exports = sequelize => {
    const DeckModel = sequelize.define(
        tablename, fields, { 
            tableName: tablename,
            timestamps: false,
            underscored: true,
        }
    );

    DeckModel.associate = function(models) {
        DeckModel.belongsToMany(models.CardModel, {
            foreignKey: 'did',
            otherKey: 'cid',
            through: models.DeckCardLinkModel
        });
        DeckModel.belongsTo(models.PlayerModel, {
            foreignKey: 'owner',
        });
    };

    return DeckModel;
}