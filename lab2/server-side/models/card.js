const dao = require('./dao/dao');

const tablename = 'public."Card"';
const fields = [
    'title',        //string
    'description',  //string
    'manacost',     //int
    'atk',          //int
    'def',          //int
    'artefact',     //bool
    'spell'         //bool
];

module.exports = client => ({
    ...dao(client, tablename, fields),
    card: function(title, description, manacost, atk, def, artefact, spell) {
        this.title = title;
        this.description = description;
        this.manacost = manacost;
        this.atk = atk;
        this.def = def;
        this.artefact = artefact;
        this.spell = spell;
    },
    getByOwner: (owner) => 
        client.query({
            name: 'card-get-by-owner',
            text: `
                select card.id, ${fields.join(', ')}  from public."Card" as card 
                inner join public."player_card" as _link 
                on card.id=_link.cid and _link.pid=$1
            `,
            values: [owner]
        })
        .then(res => res.rows || [])
        .catch(console.log),
    getByDeck: (owner) => 
        client.query({
            name: 'card-get-by-owner',
            text: `
                select card.id, ${fields.join(', ')}  from public."Card" as card 
                inner join public."player_card" as _link 
                on card.id=_link.cid and _link.pid=$1
            `,
            values: [owner]
        })
        .then(res => res.rows || [])
        .catch(console.log),
    fullTextSearch: text => 
        client.query({
            name: 'card-full-text-search',
            text: `
                select *,
                ts_headline(description, query)
                from public."Card",
                phraseto_tsquery($1) as query
                where query @@ to_tsvector(description)
            `,
            values: [text]
        })
        .then(res => res.rows || [])
        .catch(console.log),


})
