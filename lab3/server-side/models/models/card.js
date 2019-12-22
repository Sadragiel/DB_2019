const Sequelize = require('sequelize');
const tablename = 'Card';
const fields = {
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    manacost: {
        type: Sequelize.NUMBER,
    },
    atk: {
        type: Sequelize.NUMBER,
    },
    def: {
        type: Sequelize.NUMBER,
    },
    artefact: {
        type: Sequelize.BOOLEAN,
    },
    spell: {
        type: Sequelize.BOOLEAN,
    },
}

module.exports = sequelize => {
  const CardModel = sequelize.define(
      tablename, fields, { 
          tableName: tablename,
          timestamps: false,
          underscored: true,
      }
  );

  CardModel.associate = function(models) {
      CardModel.belongsToMany(models.PlayerModel, {
        foreignKey: 'cid',
        otherKey: 'pid',
        through: models.PlayerCardLinkModel
      });
      CardModel.belongsToMany(models.DeckModel, {
        foreignKey: 'cid',
        otherKey: 'pid',
        through: models.DeckCardLinkModel
      })
  };

  return CardModel;
}
