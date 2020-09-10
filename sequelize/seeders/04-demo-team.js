module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('teams', [{
            teamName: 'Barcelona'
        },
        {
            teamName: 'Real Madrid'
        },
        {
            teamName: 'Juventus'
        },
        {
            teamName: 'Milan'
        },
        {
            teamName: 'Dinamo-Brest'
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('teams', null, { });
    }
};