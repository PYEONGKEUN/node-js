var express = require('express');
var router = express.Router();
const models = require('./models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
});
router.get('/create', function(req, res, next) {
  models.User.create({userID: '1', password: '2'})
  .then(result => {
     res.json(result);
  })
  .catch(err => {
     console.error(err);
  });

});

module.exports = router;
