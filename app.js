var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//require untuk express-session
const session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
// Router untuk konstituen
var konstituensRouter = require('./routes/konstituens');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app use untuk express-session
app.use(session({secret: 'keyboard cat', cookie: {  }}));

app.use('/', index);
app.use('/users', users);
// Tambahan untuk konstituen
app.use('/konstituens', konstituensRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({message: err.message});
});

// change bin/www to here
const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`Server Starts on ${port}`);
});

module.exports = app;
