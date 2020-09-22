const models = require('../../sequelize/models');

function getAll({
    filterField, filterValue, pageNumber = 1, instancesNumber = 5, sortField = 'id', sortDirection = 'ASC'
}) {
    if (!filterField || !filterValue) {
        return models.team.findAll({
            order: [
                [sortField, sortDirection]
            ],
            offset: instancesNumber * (pageNumber - 1),
            limit: instancesNumber
        });
    }

    return models.team.findAll({
        where: {
            [filterField]: filterValue
        },
        order: [
            [sortField, sortDirection]
        ],
        offset: instancesNumber * (pageNumber - 1),
        limit: instancesNumber
    });
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
