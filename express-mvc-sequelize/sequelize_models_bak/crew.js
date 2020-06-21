const {Sequelize, sequelize, DataTypes} = require('./index');

module.exports = function () {
    const crew = sequelize.define('crew', {
      userID: { 

          field: 'crewID', 
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
          primary: true,
          allowNull: false,
          get(){
            const rawValue = this.getDataValue(userID);
            return rawValue ? rawValue.toUpperCase() : null;
          }
        },
      password: { 
          field: 'crewName', 
          type: DataTypes.STRING(30), 
          allowNull: false ,
          get(){
            const rawValue = this.getDataValue(password);
            return rawValue ? rawValue.toUpperCase() : null;
          }
        },
        nickName: { 
            field: 'crewManager', 
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
            tableName: 'crew',
      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      //underscored: true,
  
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true
  

    });
  
    return crew;
  };
  
  /*
   Sequelize 참고
   DataTypes => http://docs.sequelizejs.com/en/v3/api/datatypes/
   Associations => http://docs.sequelizejs.com/en/v3/api/associations/
   Model Function => http://docs.sequelizejs.com/en/v3/api/model/
   */