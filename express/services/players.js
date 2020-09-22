const models = require('../../sequelize/models');

function getAll({
    filterField, filterValue, pageNumber = 1, instancesNumber = 5, sortField = 'id', sortDirection = 'ASC'
}) {
    if (!filterField || !filterValue) {
        return models.player.findAll({
            order: [
                [sortField, sortDirection]
            ],
            offset: instancesNumber * (pageNumber - 1),
            limit: instancesNumber
        });
    }

    return models.player.findAll({
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
    return models.player.findByPk(id);
}

function create(player) {
    return models.player.create(player);
}

function update(player, id) {
    return models.player.update(player, {
        where: {
            id: id
        }
    });
}

function remove(id) {
    return models.player.destroy({
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
