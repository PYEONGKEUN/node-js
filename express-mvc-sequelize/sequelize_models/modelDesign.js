import Sequelize, { DataTypes } from 'sequelize';



export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        loginEmail:{
            field:'loginEmail',
            type: '로그인 이메일',
            type: DataTypes.STRING(20),
            allowNull: true,
            unique: true,
            validate:{
                isEmail: true
            }
        },
        password: { 
            field: 'password',
            type: DataTypes.STRING(20), 
            allowNull: false ,
            comment: '유저 로그인 비밀번호',
            validate:{
              is: ["^[A-Za-z0-9]{6,12}$",'i']
            },
          },
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

