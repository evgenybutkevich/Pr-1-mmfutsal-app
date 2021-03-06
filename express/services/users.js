const models = require('../../sequelize/models');
const { getFilterOptions, getSortOptions, getPageOptions } = require('../../utils/sequelize');

function getAll({ filterField, filterValue, sortField, sortDirection, page, limit }) {
    return models.user.findAndCountAll({
        ...getFilterOptions({ filterField, filterValue }),
        ...getSortOptions({ sortField, sortDirection }),
        ...getPageOptions({ page, limit }),
        distinct: true
    });
}

function getById(id) {
    return models.user.findByPk(id);
}

function create(user) {
    return models.user.create(user);
}

function update(user, id) {
    return models.user.update(user, {
        where: {
            id: id
        }
    });
}

function remove(id) {
    return models.user.destroy({
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
