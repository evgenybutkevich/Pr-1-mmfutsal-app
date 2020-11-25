const faker = require('faker');

module.exports = {
    up: async function (queryInterface, Sequelize) {
        const recordsList = [];
        const imageUrl = 'https://i.pravatar.cc/150?img=';

        for (let i = 1; i <= 50; i++) {
            recordsList.push({
                firstName: faker.name.firstName(0),
                lastName: faker.name.lastName(0),
                avatar: imageUrl + i
            });
        }

        return queryInterface.bulkInsert('players', recordsList);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('players', null, {});
    }
};
