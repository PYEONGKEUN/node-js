//const {Sequelize, sequelize, DataTypes} = require('./index');
const {
  Sequelize
} = require('sequelize');
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();


module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define('user', {
    userID: {
      field: 'userID',
      comment: '유저생성 PK',
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
      allowNull: false,

    },
    loginEmail: {
      field: 'loginEmail',
      type: '로그인 이메일',
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      field: 'password',
      comment: '로그인 비밀번호',
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        is: ["^[A-Za-z0-9]{6,12}$", 'i']
      },
    },
    nickName: {
      field: 'nickName',
      comment: '닉네임',
      type: DataTypes.STRING(30),
      allowNull: true,

    },
    phone: {
      field: 'phone',
      comment: '휴대폰 번호',
      type: DataTypes.STRING(16),
      allowNull: true,
      validate: {
        isKorNumber(value) {
          if (!phoneUtil.isValidNumberForRegion(value, 'KR')) {
            throw err;
          }
        }
      },
    },
    profileUrl: {
      field: 'profileUrl',
      comment: '프로필 이미지 url',
      type: DataTypes.TEXT('tiny'),
      allowNull: true,
      validate: {
        isUrl: true
      },
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