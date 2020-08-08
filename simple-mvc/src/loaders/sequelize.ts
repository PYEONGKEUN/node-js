import { Sequelize } from 'sequelize-typescript';
import Logger from './logger'

  export default new Sequelize({
        dialect: 'mariadb',
        host: 'localhost',
        port: 3306,        
        database: 'sequelize',
        timezone: 'Etc/GMT-9',
        username: 'sequelize',
        password: 'sequelize',
        sync: {alter: false}, // alter option value is true it raise errors when start entity associating
        logging: (msg)=>{ Logger.debug(msg);},
        models: [__dirname + '/../entity/**/*.ts'],        
    });

    





