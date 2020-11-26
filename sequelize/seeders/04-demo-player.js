const faker = require('faker');

const recordsList = [];
const recordsNumber = 50;
const avatarUrl = 'https://i.pravatar.cc/150?img=';

module.exports = {
    up: async function (queryInterface, Sequelize) {
        for (let i = 1; i <= recordsNumber; i++) {
            recordsList.push({
                firstName: faker.name.firstName(0),
                lastName: faker.name.lastName(0),
                avatar: avatarUrl + i
            });
        }

        return queryInterface.bulkInsert('players', recordsList);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('players', null, {});
    }
};
