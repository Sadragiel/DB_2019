const { PlayerModel } = require('./models');
const crud = require('./crud');


module.exports = {
    player: function(login, money) {
        this.login = login;
        this.money = money;
    },
    ...crud(PlayerModel),
}
