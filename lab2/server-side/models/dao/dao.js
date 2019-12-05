/*
 *
 */

const builderModule = require('./query-builder');

module.exports = (
    client,
    tablename,
    fields
) => {
    const builder = builderModule({
        tablename,
        fields
    });
    return {
        getAll: () => 
            client.query(builder.queries.getAll())
                .then(res => res.rows)
                .catch(console.log),
        get: id => 
            client.query(builder.queries.get(id))
                .then(res => res.rows)
                .catch(console.log),
        insert: entity => 
            client.query(builder.queries.insert(entity))
                .then(res => console.log(res.rows) || res.rows[0].id)
                .catch(console.log),
        update: entity => 
            client.query(builder.queries.update(entity))
                .then(res => console.log(res.rows) || res.rows[0].id)
                .catch(console.log),
        delete: id => 
            client.query(builder.queries.delete(id))
                .then(res => res.rowCount)
                .catch(console.log)
    }
};