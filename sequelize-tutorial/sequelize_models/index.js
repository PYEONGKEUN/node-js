const {Sequelize, Model, DataTypes} = require('sequelize');
const config = {
  "username": "mariadb",               // user name
  "password": "mariadb",              // password
  "database": "database_test", // schema name
  "host": "127.0.0.1",				// db address
  "dialect": "mariadb",				// database type
  "operatorsAliases": false
}

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

/*
  Sequelize code here
*/
class Project extends  {}
Project.init({
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
}, { sequelize, modelName: 'project' });
module.export = function(){  
    return new Project();
}

class Task extends Model {}
Task.init({
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline: Sequelize.DATE
}, { sequelize, modelName: 'task' })


module.export = function(){  
    return new Task();
}







sequelize.sync();