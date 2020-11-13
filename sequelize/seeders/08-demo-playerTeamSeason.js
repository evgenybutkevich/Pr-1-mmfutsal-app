module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('playerTeamSeasons', [{
            player_id: 1,
            team_id: 1,
            season_id: 1,
            result_id: 1
        },
        {
            player_id: 1,
            team_id: 2,
            season_id: 1,
            result_id: 2
        },
        {
            player_id: 1,
            team_id: 2,
            season_id: 2,
            result_id: 3
        },
        {
            player_id: 2,
            team_id: 1,
            season_id: 1,
            result_id: 4
        },
        {
            player_id: 2,
            team_id: 1,
            season_id: 2,
            result_id: 5
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('playerTeamSeasons', null, {});
    }
};
