const models = require('../../sequelize/models');
const serviceUtils = require('../../utils/sequelize/serviceUtils');

function getAll(params) {

    return models.player.findAndCountAll(
        serviceUtils.getSearchOptions(params));
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
