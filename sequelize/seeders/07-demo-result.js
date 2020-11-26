const recordsList = [];
const recordsNumber = 50;

function getRandomInteger(min, max) {
    const mathExpression = Math.floor(Math.random() * (max - min + 1)) + min;

    return mathExpression;
}

module.exports = {
    up: async function (queryInterface, Sequelize) {
        for (let i = 1; i <= recordsNumber; i++) {
            recordsList.push({
                goals: getRandomInteger(0, 30),
                yellowCards: getRandomInteger(0, 10),
                redCards: getRandomInteger(0, 10),
                gamesPlayed: getRandomInteger(0, 18)
            });
        }

        return queryInterface.bulkInsert('results', recordsList);
    },
    down: async function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('results', null, {});
    }
};
