module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('seasons', [{
            seasonName: 'First season',
        },
        {
            seasonName: 'Second season',
        },
        {
            seasonName: 'Third season',
        },
        {
            seasonName: 'Fourth season',
        },
        {
            seasonName: 'Fifth season',
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('seasons', null, {});
    }
};
