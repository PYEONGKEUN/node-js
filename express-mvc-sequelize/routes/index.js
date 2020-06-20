var express = require('express');
var router = express.Router();
const models = require('./models');

/* GET home page. */
router.get('/', function(req, res, next) {

  models.User.findAll()
  .then(results=> {
     res.json(results);
  })
  .catch(err => {
     console.error(err);
  });
  res.render(result);


});





module.exports = router;
