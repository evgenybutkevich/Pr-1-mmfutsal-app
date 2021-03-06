module.exports = {
    up: async function (queryInterface, DataTypes) {
        await queryInterface.createTable('results', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            goals: {
                allowNull: false,
                defaultValue: 0,
                type: DataTypes.INTEGER
            },
            yellowCards: {
                allowNull: false,
                defaultValue: 0,
                type: DataTypes.INTEGER
            },
            redCards: {
                allowNull: false,
                defaultValue: 0,
                type: DataTypes.INTEGER
            },
            gamesPlayed: {
                allowNull: false,
                defaultValue: 0,
                type: DataTypes.INTEGER
            },
            createdAt: {
                allowNull: false,
                defaultValue: DataTypes.fn('now'),
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                defaultValue: DataTypes.fn('now'),
                type: DataTypes.DATE
            }
        });
    },
    down: async function (queryInterface, DataTypes) {
        await queryInterface.dropTable('results');
    }
};
