// const ramda = require('ramda');

const tablename = 'public."Player"';

const getString = id => `
    select * from ${tablename} 
    ${id ? 'where id=$1' : ''}
`

const insertString = `
    insert into ${tablename} (login, money)
    values ($1, $2)
    RETURNING id
`;
const updateString = `
    update ${tablename}
    set login=$1
    set money=$2
    where id=$3
`;

const deleteString = `
    delete from ${tablename}
    where id=$1
`;

module.exports = (client) => ({
    get: (id) => 
        client.query({
            name: `get${id ? '-id' : ''}-player`,
            text: getString(id),
            values: id ? [id] : []
        })
            .then(res => res.rows)
            .catch(console.log),
    add: ({login, money}) =>
        client.query({
            name: 'add-player',
            text: insertString,
            values: [login, +money],
        }).then(res => console.log(res.rows) || res.rows[0].id)
        .catch(console.log),
    update: ({id, login, money}) => 
        client.query({
            name: 'update-player',
            text: updateString,
            values: [login, money, id]
        }).then(res => res.rows[0].id)
        .catch(console.log),
    delete: (id) => {
        client.query({
            name: 'delete-player',
            text: deleteString,
            values: id ? [id] : []
        }).then(res => res.rowCount)
        .catch(console.log)
    }
});