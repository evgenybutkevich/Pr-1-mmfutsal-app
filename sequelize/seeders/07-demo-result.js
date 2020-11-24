module.exports = {
    up: async function (queryInterface, Sequelize) {
        const recordsList = [];

        function getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (let i = 1; i <= 50; i++) {
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
