module.exports = {
    up: async function (queryInterface, DataTypes) {
        await queryInterface.createTable('sections', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                allowNull: false,
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
        await queryInterface.dropTable('sections');
    }
};
