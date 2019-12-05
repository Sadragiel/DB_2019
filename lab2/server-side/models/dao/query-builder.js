function creatNumericArray(n) {
    const ar = [];
    let i = 0;
    while(i++ < n) 
        ar.push(i);
    return ar;
}

module.exports = ({
    tablename, fields
}) => ({
    queries: {
        getAll: () => ({
            name: `${tablename}-get-all`,
            text: `select * from ${tablename}`
        }),
        get: id => ({
            name: `${tablename}-get`,
            text: `select * from ${tablename} where id=$1`,
            values: [id]
        }),
        insert: entity => ({
            name: `${tablename}-insert`,
            text: `
                insert into ${tablename} (${fields.join(', ')})
                values (${creatNumericArray(fields.length).map(el => `$${el}`).join(', ')})
                returning id
            `,
            values: fields.map(field => entity[field])
        }),
        update: entity => ({
            name: `${tablename}-update`,
            text: `
                update ${tablename}
                ${fields.map((field, index) => 
                    `set ${field}=$${index + 1}`)}
                where id=$${fields.length + 1}
            `,
            values: [...fields.map(field => entity[field]), entity.id]
        }),
        delete: id => ({
            name: `${tablename}-update`,
            text: `
                delete from ${tablename}
                where id=$1
            `,
            values: [id]
        })
    }
});