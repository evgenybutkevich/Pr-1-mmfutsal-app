module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('results', [{
            goals: 5,
            yellow_cards: 1,
            red_cards: 0,
            games_played: 8
        },
        {
            goals: 1,
            yellow_cards: 3,
            red_cards: 2,
            games_played: 4
        },
        {
            goals: 2,
            yellow_cards: 2,
            red_cards: 1,
            games_played: 7
        },
        {
            goals: 1,
            yellow_cards: 1,
            red_cards: 0,
            games_played: 2
        },
        {
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
