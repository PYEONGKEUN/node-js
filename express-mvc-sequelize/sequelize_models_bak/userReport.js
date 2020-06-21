const {Sequelize, sequelize, DataTypes} = require('./index');

module.exports = function () {
    const userReport = sequelize.define('UserReport', {
        userReportID: { 

          field: 'userReportID', 
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primary: true,
          allowNull: false,
          get(){
            const rawValue = this.getDataValue(userID);
            return rawValue ? rawValue.toUpperCase() : null;
          }
        },
      type: { 
          field: 'type', 
          type: DataTypes.STRING(30), 
          allowNull: false ,
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
          nickName: { 
            field: 'nickName', 
            type: DataTypes.STRING(30), 
            allowNull: true,
            get(){
                const rawValue = this.getDataValue(nickName);
                return rawValue ? rawValue.toUpperCase() : null;
              }
          },
    }, {
            // define the table's name
            tableName: 'userreport',
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
  
  /*
   Sequelize 참고
   DataTypes => http://docs.sequelizejs.com/en/v3/api/datatypes/
   Associations => http://docs.sequelizejs.com/en/v3/api/associations/
   Model Function => http://docs.sequelizejs.com/en/v3/api/model/
   */