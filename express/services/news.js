const models = require('../../sequelize/models');
const { getFilterOptions, getSortOptions, getPageOptions } = require('../../utils/sequelize');

function getAll({ filterField, filterValue, sortField, sortDirection, page, limit }) {
    return models.news.findAndCountAll({
        include: [
            {
                model: models.section,
                ...getFilterOptions({ filterField, filterValue })
            },
            {
                model: models.user
            }
        ],
        ...getSortOptions({ sortField, sortDirection }),
        ...getPageOptions({ page, limit }),
        distinct: true
    });
}

function getById(id) {
    return models.news.findByPk(id);
}

function create(article) {
    return models.news.create(article);
}

function update(article, id) {
    return models.news.update(article, {
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
