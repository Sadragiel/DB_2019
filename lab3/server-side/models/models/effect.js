const Sequelize = require('sequelize');
const tablename = 'Deck';
const fields = {
    aim: {
        type: Sequelize.STRING,
    },
    type: {
        type: Sequelize.STRING,
    },
    bonus: {
        type: Sequelize.NUMBER,
    },
    activatable: {
        type: Sequelize.BOOLEAN,
    },
};

module.exports = sequelize => {
    const EffectModel = sequelize.define(
        tablename, fields, { 
            tableName: tablename,
            timestamps: false,
            underscored: true,
        }
    );

    //TODO create assosiation

    return EffectModel;
}