module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            userName: "evge_nik",
            firstName: "Evgeny",
            lastName: "Butkevich",
            email: "evge_nik@tut.by",
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};
