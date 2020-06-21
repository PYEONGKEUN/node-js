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

router.get('/getUser/:user_id', function (req, res) {
  models.User.findAll({
      where: {
        "user_id": user_id
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
  models.User.findAll()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.error(err);
    });
})
router.get('/create', function (req, res, next) {
  models.User.create({password: '1234'})
  .then(result => {
     res.json(result);
  })
  .catch(err => {
     console.error(err);
  });
});


module.exports = router;