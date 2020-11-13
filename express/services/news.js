const models = require('../../sequelize/models');
const { Op } = require("sequelize");
const { getSearchOptions } = require('../../utils/sequelize');

function getAll(params) {
    return models.news.findAndCountAll(params, {
        include: [
            {
                model: models.section,
                ...getSearchOptions(params)
            },
            {
                model: models.user
            }

        ],
        order: [
            ['id', 'ASC']
        ],
    });
}

function getById(id) {
    return models.news.findByPk(id);
}

function create(news) {
    return models.news.create(news);
}

function update(news, id) {
    return models.news.update(news, {
        where: {
            id
        }
    });
}

function remove(id) {
    return models.news.destroy({
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
