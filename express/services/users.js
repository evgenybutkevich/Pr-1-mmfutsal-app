const models = require('../../sequelize/models');

function getAll({
    filterField, filterValue, sortField = 'id', sortDirection = 'ASC', pageNumber = 1, instancesNumber = 5
}) {
    const findAllOptions = {
        ...filterField && filterValue && { where: { [filterField]: filterValue } },
        order: [
            [sortField, sortDirection]
        ],
        offset: instancesNumber * (pageNumber - 1),
        limit: instancesNumber
    }

    return models.user.findAll(findAllOptions);
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
