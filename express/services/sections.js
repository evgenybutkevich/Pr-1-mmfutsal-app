const models = require('../../sequelize/models');

function getAll() {
    return models.section.findAll();
}

function getById(id) {
    return models.section.findByPk(id);
}

function create(section) {
    return models.section.create(section);
}

function update(section, id) {
    return models.section.update(section, {
        where: {
            id
        }
    });
}

function remove(id) {
    return models.section.destroy({
        where: {
            id
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
