const models = require('../../sequelize/models');
const { getFilterOptions, getSortOptions, getPageOptions } = require('../../utils/sequelize');

function getAll({ filterField, filterValue, sortField, sortDirection, page, limit }) {
    return models.player.findAndCountAll({
        ...getFilterOptions({ filterField, filterValue }),
        ...getSortOptions({ sortField, sortDirection }),
        ...getPageOptions({ page, limit }),
        distinct: true
    });
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
                    attributes: ['id'],
                    where: {
                        playerId: id
                    }
                }
            }, {
                model: models.result,
                through: {
                    attributes: ['id'],
                    where: {
                        playerId: id
                    }
                }
            }]
        },
    });
}

function mergeTeamsResults(player) {
    const { seasons, ...processedPlayer } = player;

    processedPlayer.seasons = seasons.map((season) => {
        const { teams, results, ...seasonRest } = season;

        seasonRest.teams = teams.map((team) => {
            const { playerTeamSeason: teamJunctionObject, ...teamRest } = team;

            const { id, playerTeamSeason: resultJunctionObject, ...resultRest } = results.find((result) => {
                return result.playerTeamSeason.id === teamJunctionObject.id;
            });

            teamRest.result = resultRest;

            return teamRest;
        });

        return seasonRest;
    });

    return processedPlayer;
}

function create(player) {
    return models.player.create(player);
}

function update(player, id) {
    return models.player.update(player, {
        where: {
            id
        }
    });
}

function remove(id) {
    return models.player.destroy({
        where: {
            id
        }
    });
}

module.exports = {
    getAll,
    getById,
    mergeTeamsResults,
    create,
    update,
    remove,
}
