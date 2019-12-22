const { DeckCardLinkModel } = require('./../models');
const crud = require('./../crud');

module.exports = {
    ...crud(DeckCardLinkModel),
    player_card: function(cid, did) {
        this.did = did;
        this.cid = cid; 
    },
    deleteByOwner: owner => 
        DeckCardLinkModel.destroy({where: {pid: owner}})
            .catch(console.log)
};