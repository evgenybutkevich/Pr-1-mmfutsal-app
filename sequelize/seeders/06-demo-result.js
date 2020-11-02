module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('results', [{
            goals: 5,
            yellowCards: 1,
            redCards: 0,
            gamesPlayed: 8
        },
        {
            goals: 1,
            yellowCards: 3,
            redCards: 2,
            gamesPlayed: 4
        },
        {
            goals: 2,
            yellowCards: 2,
            redCards: 1,
            gamesPlayed: 7
        },
        {
            goals: 1,
            yellowCards: 1,
            redCards: 0,
            gamesPlayed: 2
        },
        {
            goals: 4,
            yellowCards: 2,
            redCards: 1,
            gamesPlayed: 9
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('results', null, {});
    }
};
