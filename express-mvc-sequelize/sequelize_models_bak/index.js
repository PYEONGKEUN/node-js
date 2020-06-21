'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize, DataTypes} = require('sequelize');
const basename = path.basename(__filename);
const config = {
  "username": "mariadb",
  "password": "mariadb",
  "database": "database_development",
  "host": "127.0.0.1",
  "dialect": "mysql",
  "operatorsAliases": false
};
const sequelizeDB = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);


fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  }).forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    sequelizeDB[model.name] = model;
  });

Object.keys(sequelizeDB).forEach(modelName => {
  if (sequelizeDB[modelName].associate) {
    sequelizeDB[modelName].associate(sequelizeDB);
  }
});


sequelizeDB.DataTypes = DataTypes;
sequelizeDB.sequelize = sequelize;
sequelizeDB.Sequelize = Sequelize;


module.exports = sequelizeDB;
