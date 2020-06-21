const {Sequelize} = require('sequelize');
module.exports = function (sequelize, DataTypes) {
    const userReport = sequelize.define('userReport', {
        userReportID: { 
          field: 'userReportID', 
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
          allowNull: false,
        },
      type: { 
          field: 'type', 
          type: DataTypes.STRING(30), 
          allowNull: false ,
        },
        tartgetID:{
          field: 'tartgetID', 
          type: DataTypes.UUID, 
          allowNull: false ,
        }
    }, {
            // define the table's name
            tableName: 'userreport',
      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      //underscored: true,
  
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      //freezeTableName: true
  

    });
  
    return userReport;
  };
  
  /*
   Sequelize 참고
   DataTypes => http://docs.sequelizejs.com/en/v3/api/datatypes/
   Associations => http://docs.sequelizejs.com/en/v3/api/associations/
   Model Function => http://docs.sequelizejs.com/en/v3/api/model/
   */