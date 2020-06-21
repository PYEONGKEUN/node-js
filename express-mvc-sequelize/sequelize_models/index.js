'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize} = require('sequelize');
const basename = path.basename(__filename);
const config = {
  "username": "mariadb",
  "password": "mariadb",
  "database": "database_development",
  "host": "127.0.0.1",
  "dialect": "mysql",
  "operatorsAliases": false
};
const SequelizeDB = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);


fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  }).forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    SequelizeDB[model.name] = model;
  });

Object.keys(SequelizeDB).forEach(modelName => {
  if (SequelizeDB[modelName].associate) {
    SequelizeDB[modelName].associate(SequelizeDB);
  }
});

SequelizeDB.sequelize = sequelize;
SequelizeDB.Sequelize = Sequelize;


module.exports = SequelizeDB;
