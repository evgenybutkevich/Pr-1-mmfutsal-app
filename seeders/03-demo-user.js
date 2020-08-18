module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            userName: "ghetto_13",
            firstName: "Michail",
            lastName: "Sudnikovich",
            email: "m.sud@mail.ru",
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};