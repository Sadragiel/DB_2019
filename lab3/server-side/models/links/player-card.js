const { PlayerCardLinkModel } = require('./../models');
const crud = require('./../crud');

module.exports = {
    ...crud(PlayerCardLinkModel),
    player_card: function(cid, pid) {
        this.pid = pid;
        this.cid = cid; 
    },
    deleteByOwner: owner => 
        PlayerCardLinkModel.destroy({where: {pid: owner}})
            .catch(console.log)
};