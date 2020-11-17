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
                field: 'section_id',
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
                field: 'user_id',
                references: {
                    model: "users",
                    key: "id"
                },
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
        await queryInterface.dropTable('news');
    }
};
