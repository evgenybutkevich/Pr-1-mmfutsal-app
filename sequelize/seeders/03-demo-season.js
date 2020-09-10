module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('seasons', [{
            seasonName: 'First season',
            startYear: '2017-09-01',
            endYear: '2018-04-01'
        },
        {
            seasonName: 'Second season',
            startYear: '2018-09-01',
            endYear: '2019-04-01'
        },
        {
            seasonName: 'Third season',
            startYear: '2019-09-01',
            endYear: '2020-04-01'
        },
        {
            seasonName: 'Fourth season',
            startYear: '2020-09-01',
            endYear: '2021-04-01'
        },
        {
            seasonName: 'Fifth season',
            startYear: '2021-09-01',
            endYear: '2022-04-01'
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('seasons', null, { });
    }
};