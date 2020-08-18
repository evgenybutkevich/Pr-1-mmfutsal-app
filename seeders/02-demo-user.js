module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            userName: "fom4",
            firstName: "Anton",
            lastName: "Fomenok",
            email: "fom4@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};