module.exports = {
    up: async function (queryInterface, Sequelize) {
        const recordsList = [];

        for (let i = 1, j = 1; i <= 50; i++) {
            recordsList.push({
                playerId: i,
                teamId: j,
                seasonId: 1,
                resultId: i
            });

            if (i % 5 == 0) {
                j++;
            }
        }

        return queryInterface.bulkInsert('playerTeamSeasons', recordsList);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('playerTeamSeasons', null, {});
    }
};
