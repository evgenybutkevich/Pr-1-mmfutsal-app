module.exports = {
    up: async function (queryInterface, DataTypes) {
        await queryInterface.createTable('results', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            playerTeamSeasonId: {
                references: {
                    model: "playerTeamSeasons",
                    key: "id"
                },
                type: DataTypes.INTEGER,
            },
            goals: {
                allowNull: false,
                defaultValue: 0,
                type: DataTypes.INTEGER
            },
            yellowCards: {
                allowNull: false,
                defaultValue: 0,
                field: 'yellow_cards',
                type: DataTypes.INTEGER
            },
            redCards: {
                allowNull: false,
                defaultValue: 0,
                field: 'red_cards',
                type: DataTypes.INTEGER
            },
            gamesPlayed: {
                allowNull: false,
                defaultValue: 0,
                field: 'games_played',
                type: DataTypes.INTEGER
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
        await queryInterface.dropTable('results');
    }
};
