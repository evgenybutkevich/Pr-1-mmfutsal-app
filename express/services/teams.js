const models = require('../../sequelize/models');
const serviceUtils = require('../../utils/sequelize/serviceUtils');

function getAll({ filterField, filterValue, sortField, sortDirection, page, limit }) {

    return models.team.findAndCountAll(
        serviceUtils.getSearchOptions(filterField, filterValue, sortField, sortDirection, page, limit));
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
