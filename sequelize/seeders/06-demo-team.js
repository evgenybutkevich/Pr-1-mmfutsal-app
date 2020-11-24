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
        },
        {
            teamName: 'Molodechno'
        },
        {
            teamName: 'Arcenal'
        },
        {
            teamName: 'BATE'
        },
        {
            teamName: 'PSJ'
        },
        {
            teamName: 'Lokomotiv'
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('teams', null, {});
    }
};
