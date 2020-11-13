module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('seasons', [{
            season_name: 'First season',
        },
        {
            season_name: 'Second season',
        },
        {
            season_name: 'Third season',
        },
        {
            season_name: 'Fourth season',
        },
        {
            season_name: 'Fifth season',
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('seasons', null, {});
    }
};
