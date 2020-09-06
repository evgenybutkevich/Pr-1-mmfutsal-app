module.exports = {
    up: async function (queryInterface, DataTypes) {
        await queryInterface.createTable('players', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            firstName: {
                allowNull: false,
                type: DataTypes.STRING
            },
            lastName: {
                allowNull: false,
                type: DataTypes.STRING
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
        await queryInterface.dropTable('players');
    }
};