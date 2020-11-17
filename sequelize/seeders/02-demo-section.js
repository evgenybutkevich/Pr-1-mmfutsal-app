module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('sections', [{
            name: 'warming-up',
        },
        {
            name: 'short'
        },
        {
            name: 'results'
        },
        {
            name: 'transfers'
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('sections', null, {});
    }
};
