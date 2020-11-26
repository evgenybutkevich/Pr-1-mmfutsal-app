const faker = require('faker');

const RECORDS_NUMBER = 50;
const AVATAR_URL = 'https://i.pravatar.cc/150?img=';

module.exports = {
    up: async function (queryInterface, Sequelize) {
        const recordsList = [];

        for (let i = 1; i <= RECORDS_NUMBER; i++) {
            recordsList.push({
                firstName: faker.name.firstName(0),
                lastName: faker.name.lastName(0),
                avatar: AVATAR_URL + i
            });
        }

        return queryInterface.bulkInsert('players', recordsList);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('players', null, {});
    }
};
