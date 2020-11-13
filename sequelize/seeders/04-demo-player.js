module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('players', [{
            first_name: 'Evgeny',
            last_name: 'Butkevich'
        },
        {
            first_name: 'Anton',
            last_name: 'Fomenok'
        },
        {
            first_name: 'Mikhail',
            last_name: 'Sudnikovich'
        },
        {
            first_name: 'Ilya',
            last_name: 'Faley'
        },
        {
            first_name: 'Arthur',
            last_name: 'Shket'
        },
        {
            first_name: 'Evgeny',
            last_name: 'Karlenok'
        },
        {
            first_name: 'Anton',
            last_name: 'Kucher'
        },
        {
            first_name: 'Ilya',
            last_name: 'Sinko'
        },
        {
            first_name: 'Evgeny',
            last_name: 'Gorokhovich'
        },
        {
            first_name: 'Vova',
            last_name: 'Linnik'
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('players', null, {});
    }
};
