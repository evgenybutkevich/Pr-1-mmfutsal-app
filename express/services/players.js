const models = require('../../sequelize/models');
const { getSearchOptions } = require('../../utils/sequelize');

function getAll(params) {
    return models.player.findAndCountAll(getSearchOptions(params));
}

function getById(id) {
    return models.player.findByPk(id, {
        include: {
            model: models.season,
            through: {
                attributes: []
            },
            include: [{
                model: models.team,
                through: {
                    attributes: ['seasonId', 'teamId'],
                    where: {
                        playerId: id
                    }
                }
            }, {
                model: models.result,
                through: {
                    attributes: ['seasonId', 'teamId'],
                    where: {
                        playerId: id
                    }
                }
            }]
        }
    });
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
