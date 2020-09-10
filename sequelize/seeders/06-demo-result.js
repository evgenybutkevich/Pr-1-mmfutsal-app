module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('results', [{
            playerTeamSeasonId: 1,
            goals: 5,
            yellowCards: 1,
            redCards: 0,
            gamesPlayed: 8
        },
        {
            playerTeamSeasonId: 2,
            goals: 1,
            yellowCards: 3,
            redCards: 2,
            gamesPlayed: 4
        },
        {
            playerTeamSeasonId: 3,
            goals: 2,
            yellowCards: 2,
            redCards: 1,
            gamesPlayed: 7
        },
        {
            playerTeamSeasonId: 4,
            goals: 1,
            yellowCards: 1,
            redCards: 0,
            gamesPlayed: 2
        },
        {
            playerTeamSeasonId: 5,
            goals: 4,
            yellowCards: 2,
            redCards: 1,
            gamesPlayed: 9
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('results', null, { });
    }
};