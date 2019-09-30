const Sequelize = require('sequelize');
const poolModel = require('../model/pool');
const addressModel = require('../model/address');
const scheduleModel = require('../model/schedule');
const db = {};
var sequelize = new Sequelize('pools', 'postgres', 'qaz123wsx', {
  host: 'localhost',
  dialect: 'postgres',
});

const pool = poolModel(sequelize, Sequelize);
const address = addressModel(sequelize, Sequelize);
const schedule = scheduleModel(sequelize, Sequelize);

db['pool'] = pool;
db['address'] = address;
db['schedule'] = schedule;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync();
module.exports = db;
