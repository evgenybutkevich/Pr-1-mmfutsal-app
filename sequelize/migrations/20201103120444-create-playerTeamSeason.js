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
                field: 'player_id',
                references: {
                    model: "players",
                    key: "id"
                },
                type: DataTypes.INTEGER,
            },
            teamId: {
                field: 'team_id',
                references: {
                    model: "teams",
                    key: "id"
                },
                type: DataTypes.INTEGER,
            },
            seasonId: {
                field: 'season_id',
                references: {
                    model: "seasons",
                    key: "id"
                },
                type: DataTypes.INTEGER,
            },
<<<<<<< HEAD:sequelize/migrations/20200909000000-create-playerTeamSeason.js
=======
            resultId: {
                field: 'result_id',
                references: {
                    model: "results",
                    key: "id"
                },
                type: DataTypes.INTEGER,
            },
>>>>>>> afc9381... Sequelize: rename migrations, add new for news and sections:sequelize/migrations/20201103120444-create-playerTeamSeason.js
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
        await queryInterface.dropTable('playerTeamSeasons');
    }
};
