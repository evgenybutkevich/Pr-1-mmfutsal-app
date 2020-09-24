const models = require('../../sequelize/models');
const { getSearchOptions } = require('../../utils/sequelize');

function getAll(params) {
    return models.user.findAndCountAll(getSearchOptions(params));
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
