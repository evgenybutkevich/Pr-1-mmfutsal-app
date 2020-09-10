module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [{
            userName: 'userName_1',
            email: 'userName_1@example.com',
            telephone: '+375 29 111-11-11',
            password: 'Un11111',
            firstName: 'Evgeny',
            lastName: 'Butkevich'
        },
        {
            userName: 'userName_2',
            email: 'userName_2@example.com',
            telephone: '+375 29 222-22-22',
            password: 'Un22222',
            firstName: 'Anton',
            lastName: 'Fomenok'
        },
        {
            userName: 'userName_3',
            email: 'userName_3@example.com',
            telephone: '+375 33 333-33-33',
            password: 'Un33333',
            firstName: 'Mikhail',
            lastName: 'Sudnikovich'
        },
        {
            userName: 'userName_4',
            email: 'userName_4@example.com',
            telephone: '+375 44 444-44-44',
            password: 'Un44444',
            firstName: 'Ilya',
            lastName: 'Faley'
        },
        {
            userName: 'userName_5',
            email: 'userName_5@example.com',
            telephone: '+375 25 555-55-55',
            password: 'Un55555',
            firstName: 'Arthur',
            lastName: 'Shket'
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, { });
    }
};