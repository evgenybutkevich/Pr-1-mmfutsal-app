module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('players', [{
            firstName: 'Evgeny',
            lastName: 'Butkevich'
        },
        {
            firstName: 'Anton',
            lastName: 'Fomenok'
        },
        {
            firstName: 'Mikhail',
            lastName: 'Sudnikovich'
        },
        {
            firstName: 'Ilya',
            lastName: 'Faley'
        },
        {
            firstName: 'Arthur',
            lastName: 'Shket'
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('players', null, { });
    }
};