module.exports = {
    up: async function (queryInterface, DataTypes) {
        await queryInterface.createTable('news', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            heading: {
                allowNull: false,
                type: DataTypes.STRING
            },
            sectionId: {
                allowNull: false,
                references: {
                    model: "sections",
                    key: "id"
                },
                type: DataTypes.INTEGER,
            },
            content: {
                allowNull: false,
                type: DataTypes.STRING(32768)
            },
            userId: {
                allowNull: false,
                references: {
                    model: "users",
                    key: "id"
                },
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
        await queryInterface.dropTable('news');
    }
};
