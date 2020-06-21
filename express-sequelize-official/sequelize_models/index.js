'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const databaseConfig = {
  "username": "mariadb",
  "password": "mariadb",
  "database": "database_development",
  "host": "127.0.0.1",
  "dialect": "mysql",
  "operatorsAliases": false
};
class SequelizeDB {

  constructor () {
    this._sequelize = new Sequelize(databaseConfig)
    this._models = {}
    
    // Load each model file
    const models = Object.assign({}, ...fs.readdirSync(__dirname)
      .filter(file =>
        (file.indexOf(".") !== 0) && (file !== "index.js")
      )
      .map((file) => {
        const model = require(path.join(__dirname, file)).default
        
        return {
          [model.name]: model.init(this._sequelize),
        }
      })
    )

    // Load model associations
    for (const model of Object.keys(models)) {
      typeof models[model].associate === 'function' && models[model].associate(models);
    }

    this._models = models;
  }

  get sequelize () {
    return this._sequelize;
  }

  get models () {
    return this._models;
  }

}
const sequelizeDB = new SequelizeDB();

export  const models = sequelizeDB.models;
export  const sequelize = sequelizeDB.sequelize;