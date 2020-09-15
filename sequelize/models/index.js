const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const db = {};

const isHidden = file => {
    return file.indexOf('.') !== 0;
}

const isBasename = (file, basename) => {
    return file !== basename;
}

const isJavaScript = file => {
    return file.slice(-3) === '.js'
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return isHidden(file) && isBasename(file, basename) && isJavaScript(file);
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
