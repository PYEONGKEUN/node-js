import { Sequelize } from 'sequelize-typescript';
import  User  from './users.model';
import fs from 'fs';
import path from 'path';
const basename = path.basename(__dirname);

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_PATH,
    dialect: 'mysql',
    timezone: '+09:00',
    define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
    pool: {
      min: 0,
      max: 30,
      idle: 10000,
      acquire: 30000,
    },
  },
);

const sequelizeDB: any = {};

fs.readdirSync(__dirname)
  // tslint:disable-next-line: ter-arrow-parens
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  // tslint:disable-next-line: ter-arrow-parens
  }).forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    sequelizeDB[model.name] = model;
  });

// tslint:disable-next-line: ter-arrow-parens
Object.keys(sequelizeDB).forEach(modelName => {
  if (sequelizeDB[modelName].associate) {
    sequelizeDB[modelName].associate(sequelizeDB);
  }
});

// let modelList = [User];
// sequelize.addModels(modelList);

sequelize.authenticate().catch((err: Error) => {
  console.error('Unable to connect to the database:', err);
});
