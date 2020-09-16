const models = require('../../sequelize/models');

function getAll() {
    return models.season.findAll();
}

function getById(id) {
    return models.season.findByPk(id);
}

function create(season) {
    return models.season.create(season);
}

function update(season, id) {
    return models.season.update(season, {
        where: {
            id: id
        }
    });
}

function remove(id) {
    return models.season.destroy({
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
