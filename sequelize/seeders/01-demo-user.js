module.exports = {
    up: async function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [{
            username: 'userName_1',
            email: 'userName_1@example.com',
            telephone: '+375 29 111-11-11',
            password: 'Un11111',
            first_name: 'Evgeny',
            last_name: 'Butkevich'
        },
        {
            username: 'userName_2',
            email: 'userName_2@example.com',
            telephone: '+375 29 222-22-22',
            password: 'Un22222',
            first_name: 'Anton',
            last_name: 'Fomenok'
        },
        {
            username: 'userName_3',
            email: 'userName_3@example.com',
            telephone: '+375 33 333-33-33',
            password: 'Un33333',
            first_name: 'Mikhail',
            last_name: 'Sudnikovich'
        },
        {
            username: 'userName_4',
            email: 'userName_4@example.com',
            telephone: '+375 44 444-44-44',
            password: 'Un44444',
            first_name: 'Ilya',
            last_name: 'Faley'
        },
        {
            username: 'userName_5',
            email: 'userName_5@example.com',
            telephone: '+375 25 555-55-55',
            password: 'Un55555',
            first_name: 'Arthur',
            last_name: 'Shket'
        }]);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    }
};
