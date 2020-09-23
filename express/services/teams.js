const models = require('../../sequelize/models');

function getAll({ filterField, filterValue, sortField = 'id', sortDirection = 'ASC' }) {
    const findAllOptions = {
        ...filterField && filterValue && { where: { [filterField]: filterValue } },
        order: [
            [sortField, sortDirection]
        ]
    }

    return models.team.findAll(findAllOptions);
}

function getById(id) {
    return models.team.findByPk(id);
}

function create(team) {
    return models.team.create(team);
}

function update(team, id) {
    return models.team.update(team, {
        where: {
            id: id
        }
    });
}

function remove(id) {
    return models.team.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}
