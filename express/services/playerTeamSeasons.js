const models = require('../../sequelize/models');

function getAll(playerId) {
    return models.playerTeamSeason.findAll({
        where: {
            playerId
        },
        include: [{
            model: models.result
        }]
    });
}

module.exports = {
    getAll
}
