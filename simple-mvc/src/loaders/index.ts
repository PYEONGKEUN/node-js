import expressLoader from './express';
import Logger from './logger';
import { Container } from 'typedi';
import LoggerInstance from './logger';
import sequelizeLoader from './sequelize';
import fs from 'fs';

// DI


export default async ({expressApp}) => {
    try {
        await sequelizeLoader.authenticate();
        LoggerInstance.info(__dirname + '/../entities/**/*.entity.ts');
        LoggerInstance.info('✌️ Sequelize Connection has been established successfully');

        

        for(let model in sequelizeLoader.models){
            LoggerInstance.info( '✌️ Sequelize Model "'+model+'" is loaded');
        }
        LoggerInstance.info('✌️ Sequelize Sync with DB starting...');
        await sequelizeLoader.sync();
        LoggerInstance.debug('✌️ Sequelize Synced!');
        Container.set('sequelize', sequelizeLoader);
        LoggerInstance.info('✌️ Sequelize injected into container');


        Container.set('logger', LoggerInstance);
        LoggerInstance.info('✌️ Logger injected into container');
        Logger.info('✌️ Dependency Injector loaded');

        await expressLoader({app: expressApp});
        Logger.info('✌️ Express loaded');

    } catch (e) {
        LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
        throw e;
    }


};