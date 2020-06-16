"use strict";
const { Sequelize, Op, Model, DataTypes } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('sequelize', 'root', 'mariadb', {
    host: 'localhost:3306?serverTimezone=UTC',
    dialect: 'mariadb'
  });
(async function (){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();
