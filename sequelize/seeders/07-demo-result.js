module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('results', [{
            playerTeamSeasonId: 1,
            goals: 5,
            yellow_cards: 1,
            red_cards: 0,
            games_played: 8
        },
        {
            playerTeamSeasonId: 2,
            goals: 1,
            yellow_cards: 3,
            red_cards: 2,
            games_played: 4
        },
        {
            playerTeamSeasonId: 3,
            goals: 2,
            yellow_cards: 2,
            red_cards: 1,
            games_played: 7
        },
        {
            playerTeamSeasonId: 4,
            goals: 1,
            yellow_cards: 1,
            red_cards: 0,
            games_played: 2
        },
        {
            playerTeamSeasonId: 5,
            goals: 4,
            yellow_cards: 2,
            red_cards: 1,
            games_played: 9
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('results', null, {});
    }
};
