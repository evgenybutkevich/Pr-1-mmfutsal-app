module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('teams', [{
            team_name: 'Barcelona'
        },
        {
            team_name: 'Real Madrid'
        },
        {
            team_name: 'Juventus'
        },
        {
            team_name: 'Milan'
        },
        {
            team_name: 'Dinamo-Brest'
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('teams', null, {});
    }
};
