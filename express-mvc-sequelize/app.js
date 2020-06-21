var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// connect To DB
const sequelize = require('./sequelize_models').sequelize;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// connect To DB
// 서버 시작이 models에 있는 테이블들을 연결도니 DB에 Create 및 Alter
// https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-method-sync
sequelize.sync({
  alter: true,
  logging : true,
  //force : false -> true 일경우 테이블을 무조건 Drop 함
  // schema : true

})
  .then(() => {
    console.log('✓ DB connection success.');
    console.log('  Press CTRL-C to stop\n');
  })
  .catch(err => {
    console.error(err);
    console.log('✗ DB connection error. Please make sure DB is running.');
    process.exit();
  });

module.exports = app;

