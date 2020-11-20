module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('playerTeamSeasons', [{
            playerId: 1,
            teamId: 1,
            seasonId: 1,
            resultId: 1
        },
        {
            playerId: 1,
            teamId: 2,
            seasonId: 1,
            resultId: 2
        },
        {
            playerId: 1,
            teamId: 2,
            seasonId: 2,
            resultId: 3
        },
        {
            playerId: 2,
            teamId: 1,
            seasonId: 1,
            resultId: 4
        },
        {
            playerId: 2,
            teamId: 1,
            seasonId: 2,
            resultId: 5
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('playerTeamSeasons', null, {});
    }
};
