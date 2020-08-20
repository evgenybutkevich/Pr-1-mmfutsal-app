module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("users", [{
            userName: "evge_nik",
            firstName: "Evgeny",
            lastName: "Butkevich",
            email: "evge_nik@tut.by",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            userName: "fom4",
            firstName: "Anton",
            lastName: "Fomenok",
            email: "fom4@gmail.com",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            userName: "ghetto_13",
            firstName: "Michail",
            lastName: "Sudnikovich",
            email: "m.sud@mail.ru",
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
    }
};