const Sequelize = require('sequelize');
const tablename = 'Player';
const fields = {
    login: {
      type: Sequelize.STRING
    },
    money: {
      type: Sequelize.NUMBER
    }
};
module.exports = sequelize => {
  const PlayerModel = sequelize.define(
      tablename, fields, { 
          tableName: tablename,
          timestamps: false,
          underscored: true,
      }
  );

  PlayerModel.associate = function(models) {
      PlayerModel.belongsToMany(models.CardModel, {
        foreignKey: 'pid',
        otherKey: 'cid',
        through: models.PlayerCardLinkModel
      });
  };

  return PlayerModel;
}
