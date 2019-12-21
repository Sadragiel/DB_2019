const dao = require('./dao/dao');

const tablename = 'public."Player"';
const fields = [
    'login',
    'money'
];

module.exports = client => ({
    ...dao(client, tablename, fields),
    player: function(login, money) {
        this.login = login;
        this.money = money;
    },
    parametrizedSearch: (moneyFrom, moneyTo) =>
    client.query({
        name: 'player-parametrized-search',
        text: `
            select player.id, player.login, player.money
            from public."Player" as player
            inner join public."player_card" as link
            on player.id=link.pid 
            inner join public."Card" as card 
            on link.cid=card.id 
            where ( 
                (card.artefact=true or card.spell=true)
                and player.money between $1 and $2
            )
        `,
        values: [moneyFrom, moneyTo]
    })
    .then(res => res.rows || [])
    .catch(console.log),
})