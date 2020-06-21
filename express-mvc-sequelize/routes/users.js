var express = require('express');
var router = express.Router();
var models = require('../sequelize_models');
/* 
  URI = /users
*/
/*
  GET users listing.
*/
router.get('/', function (req, res, next) {
  res.render('index', {
    title: "MY HOMEPAGE",
    length: 5
  })
});

router.get('/getUser/:nickName', function (req, res) {
  models.user.findAll({
      where: {
        "nickName": nickName
      }
    })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.error(err);
    });

    
    
});

router.get('/list', function (req, res) {
  models.user.findAll()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.error(err);
    });
})
router.get('/create', function (req, res, next) {
  models.user.create({password: '1234', phone:'010-2999-8890', nickName: 'hello'})
  .then(result => {
     res.json(result);
  })
  .catch(err => {
     console.error(err);
  });
});


module.exports = router;