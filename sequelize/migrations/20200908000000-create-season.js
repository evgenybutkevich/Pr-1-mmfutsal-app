module.exports = {
    up: async function (queryInterface, DataTypes) {
        await queryInterface.createTable('seasons', {
            seasonName: {
                allowNull: false,
                type: DataTypes.STRING
            },
            startYear: {
                allowNull: false,
                type: DataTypes.DATEONLY
            },
            endYear: {
                allowNull: false,
                type: DataTypes.DATEONLY
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
        await queryInterface.dropTable('seasons');
    }
};
