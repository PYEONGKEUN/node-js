const {
  Sequelize
} = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const crew = sequelize.define('crew', {
    userID: {
      field: 'crewID',
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
      primaryKey: true,
      allowNull: false,
    },
    crewName: {
      field: 'crewName',
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    crewManager: {
      field: 'crewManager',
      type: DataTypes.STRING(30),
      allowNull: true,
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