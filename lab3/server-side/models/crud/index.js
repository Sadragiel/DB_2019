module.exports = ( Model ) => ({
    getAll: () => 
        Model.findAll()
            .catch(console.log),
    get: id => 
        Model.findOne({ where: {id} })
            .catch(console.log),
    insert: entity =>
        Model.create(entity)
            .catch(console.log),
    update: entity => 
        Model.update(entity, {where: {id: entity.id}})
            .catch(console.log),
    delete: id => 
        Model.destroy({where: {id}})
            .catch(console.log),
});