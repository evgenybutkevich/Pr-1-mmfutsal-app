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
                field: 'first_name',
                type: DataTypes.STRING
            },
            lastName: {
                allowNull: false,
                field: 'last_name',
                type: DataTypes.STRING
            },
            createdAt: {
                allowNull: false,
                defaultValue: DataTypes.fn('now'),
                field: 'created_at',
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                defaultValue: DataTypes.fn('now'),
                field: 'updated_at',
                type: DataTypes.DATE
            }
        });
    },
    down: async function (queryInterface, DataTypes) {
        await queryInterface.dropTable('players');
    }
};