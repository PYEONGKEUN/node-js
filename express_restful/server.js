//https://velopert.com/node-js-tutorials
//Nodejs 강좌
//express 프레임 워크
var express = require('express');
var app = express();
//POST 데이터 처리
var bodyParser = require('body-parser');
//express-session 은 Express 프레임워크에서 세션을 관리하기 위해 필요한 미들웨어 입니다
var session = require('express-session');
// 파일 시스템 모듈 data/user.json 파일을 읽기위함
var fs = require("fs")

// view 디렉토리 설정
app.set('views', __dirname + '/views');
//view 처리 엔진을 ejs로 지정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
 console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
/*
secret – 쿠키를 임의로 변조하는것을 방지하기 위한 값 입니다. 이 값을 통하여 세션을 암호화 하여 저장합니다.
resave – 세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값입니다. express-session documentation에서는 이 값을 false 로 하는것을 권장하고 필요에 따라 true로 설정합니다.
saveUninitialized – 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장합니다.

*/
app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));


var router = require('./router/main')(app, fs);