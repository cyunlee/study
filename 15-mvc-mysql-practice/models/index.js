const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//db 객체에 User를 추가해준다
db.User = require('./User')(sequelize, Sequelize);
module.exports = db;