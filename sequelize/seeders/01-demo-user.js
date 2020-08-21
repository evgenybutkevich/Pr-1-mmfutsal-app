module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("users", [{
            userName: "evge_nik",
            email: "evge_nik@tut.by",
            telephone: "+375 29 139-87-68",
            password: "11111",
            firstName: "Evgeny",
            lastName: "Butkevich",            
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            userName: "fom4",
            email: "fom4@gmail.com",
            telephone: "+375 25 531-87-34",
            password: "22222",
            firstName: "Anton",
            lastName: "Fomenok",            
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            userName: "ghetto_13",
            email: "m.sud@mail.ru",
            telephone: "+375 33 603-11-80",
            password: "33333",
            firstName: "Michail",
            lastName: "Sudnikovich",
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
    }
};