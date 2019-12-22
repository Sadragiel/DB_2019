const Sequelize = require('sequelize');
const tablename = 'player_card';
const fields = {
    pid: {
      type: Sequelize.NUMBER
    },
    cid: {
      type: Sequelize.NUMBER
    }
};
module.exports = sequelize => {
  const PlayerCardLinkModel = sequelize.define(
      tablename, fields, { 
          tableName: tablename,
          timestamps: false,
          underscored: true,
      }
  );

  return PlayerCardLinkModel;
}
