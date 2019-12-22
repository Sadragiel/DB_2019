const { EffectModel } = require('./models');
const crud = require('./crud');

module.exports = {
    ...crud(EffectModel),
    effect: function(aim, bonus, type, activatable) {
        this.aim = aim;
        this.bonus = bonus;
        this.type = type;
        this.activatable = activatable;
    }
};