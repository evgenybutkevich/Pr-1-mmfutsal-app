const { QueryTypes } = require('sequelize');

const db = require('../../sequelize/models/index');
const models = require('../../sequelize/models');
const { getFilterOptions, getSortOptions, getPageOptions } = require('../../utils/sequelize');

const bestPlayersQuery = `
    select
        distinct on
        ("team"."teamName") "teamName",
        "player"."id",
        "player"."firstName",
        "player"."lastName",
        "player"."avatar",
        cast(cast("result"."goals" as DECIMAL(5, 3))/ "result"."gamesPlayed" as DECIMAL(5, 3)) as "quotient"
    from
        "players" as "player"
    inner join "playerTeamSeasons" as "playerTeamSeason" on
        "player"."id" = "playerTeamSeason"."playerId"
    inner join "teams" as "team" on
        "team"."id" = "playerTeamSeason"."teamId"
    inner join "results" as "result" on
        "result"."id" = "playerTeamSeason"."resultId"
    where
        "playerTeamSeason"."seasonId" = 1
        and "result"."gamesPlayed" > 0
    order by
        "team"."teamName",
        "quotient" desc
`;

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

function getBestPlayers() {
    return db.sequelize.query(bestPlayersQuery, { type: QueryTypes.SELECT });
}

module.exports = {
    getAll,
    getById,
    mergeTeamsResults,
    create,
    update,
    remove,
    getBestPlayers
}
