'use strict';
import Sequelize from 'sequelize';

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userID: {
          type: Sequelize.INTEGER,
          primaryKey : true,
          autoIncrement : true,
          comment : '유저 아이디'
        },
        blogUrl: {
          type: Sequelize.STRING(15),
          comment : '유저 닉네임',
          validate:{
            isUrl: true
          }
        },
        phone:  {
          type: Sequelize.STRING(18),
          comment : '핸드폰 번호',
          allowNull: false,
        }
      },
      { 
        tableName: 'user',
        timestamps: false
      },
    );
  }

  static associate(models) {
    models.User.hasMany();
  }
}

