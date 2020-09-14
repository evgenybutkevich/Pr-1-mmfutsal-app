module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('playerTeamSeasons', [{
            playerId: 1,
            teamId: 1,
            seasonId: 1
        },
        {
            playerId: 1,
            teamId: 2,
            seasonId: 1
        },
        {
            playerId: 1,
            teamId: 2,
            seasonId: 2
        },
        {
            playerId: 2,
            teamId: 1,
            seasonId: 1
        },
        {
            playerId: 2,
            teamId: 1,
            seasonId: 2
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('playerTeamSeasons', null, {});
    }
};
