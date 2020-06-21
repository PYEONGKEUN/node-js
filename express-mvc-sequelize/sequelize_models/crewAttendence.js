const {Sequelize} = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const crewAttendence = sequelize.define('crewAttendence', {
      attendenceID: {
        field: 'attendenceID', 
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
        primaryKey: true,
        allowNull: false,
      },
      userID: { 
          field: 'userID', 
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
          allowNull: false,
        },
      crewID: { 
          field: 'crewID', 
          type: DataTypes.STRING(30), 
          allowNull: false ,
        },
    }, {
            // define the table's name
            tableName: 'crewattendence',
      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      //underscored: true,
  
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
  

    });
  
    return crewAttendence;
  };
  
  /*
   Sequelize 참고
   DataTypes => http://docs.sequelizejs.com/en/v3/api/datatypes/
   Associations => http://docs.sequelizejs.com/en/v3/api/associations/
   Model Function => http://docs.sequelizejs.com/en/v3/api/model/
   */