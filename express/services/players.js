const models = require('../../sequelize/models');

function getAll(sortField, sortDirection) {
    if (!sortField || !sortDirection) {
        return models.player.findAll();
    }

    return models.player.findAll({
        order: [
            [sortField, sortDirection]
        ]
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
