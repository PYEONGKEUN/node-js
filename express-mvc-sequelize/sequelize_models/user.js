//const {Sequelize, sequelize, DataTypes} = require('./index');
const {Sequelize} = require('sequelize');
//const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();


module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define('User', {
      userID: {           
          field: 'userID', 
          type: DataTypes.UUID,
          primary: true,
          defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
          allowNull: false,
          get(){
            const rawValue = this.getDataValue(userID);
            return rawValue ? rawValue.toUpperCase() : null;
          }
        },
      password: { 
          field: 'password', 
          type: DataTypes.STRING(20), 
          allowNull: false ,
          validate:{

          },
          get(){
            const rawValue = this.getDataValue(password);
            return rawValue ? rawValue.toUpperCase() : null;
          }
        },
        nickName: { 
            field: 'nickName', 
            type: DataTypes.STRING(30), 
            allowNull: true,
            get(){
                const rawValue = this.getDataValue(nickName);
                return rawValue ? rawValue.toUpperCase() : null;
              }
          },
          phone: { 
            field: 'phone', 
            type: DataTypes.STRING(16), 
            allowNull: true,
            validate:{
              isKorNumber(value){
                if(!phoneUtil.isValidNumberForRegion(value, 'kr')) throw err;
              }
            },
            get(){
                const rawValue = this.getDataValue(phone);
                return rawValue ? rawValue.toUpperCase() : null;
              }
          },
          profileUrl:{
            field: 'profileUrl',
            type: DataTypes.TEXT('tiny'),
            allowNull: true,
            validate:{
              isUrl: true
            },
            get(){
              const rawValue = this.getDataValue(profileUrl);
              return rawValue ? rawValue.toUpperCase() : null;
            }
          }
    }, {
            // define the table's name
            tableName: 'user',
      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      //underscored: true,
  
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
  

    });
  
    return user;
  };
  
