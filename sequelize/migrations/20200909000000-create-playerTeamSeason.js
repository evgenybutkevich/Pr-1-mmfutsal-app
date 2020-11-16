module.exports = {
    up: async function (queryInterface, DataTypes) {
        await queryInterface.createTable('playerTeamSeasons', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            playerId: {
                references: {
                    model: "players",
                    key: "id"
                },
                type: DataTypes.INTEGER,
            },
            teamId: {
                references: {
                    model: "teams",
                    key: "id"
                },
                type: DataTypes.INTEGER,
            },
            seasonId: {
                references: {
                    model: "seasons",
                    key: "id"
                },
                type: DataTypes.INTEGER,
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
        await queryInterface.dropTable('playerTeamSeasons');
    }
};
