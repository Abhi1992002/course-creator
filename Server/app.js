var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

//admin
const signupAdminRouter = require('./routes/admin/signupAdminRouter')
const signinAdminRouter = require('./routes/admin/signinAdminRouter')
const createNewCourseRouter = require('./routes/admin/createNewCourseRouter')
const editCourseRouter = require('./routes/admin/editCourseRouter')
const getAllCoursesRouter = require('./routes/admin/getAllCoursesRouter')

//user
const signupUserRouter = require('./routes/user/signupUserRouter')
const signinUserRouter = require('./routes/user/signinUserRouter')
const getCoursesRouter = require('./routes/user/getCoursesRouter')
const purchaseNewCourseRouter = require('./routes/user/purchaseNewCourseRouter')
const purchasedCoursesRouter = require('./routes/user/purchasedCoursesRouter')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//database initializing
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('connected to mongodb'))

// admin Routes
app.use('/admin/signup',signupAdminRouter)
app.use('/admin/login',signinAdminRouter)
app.use('/admin/courses',createNewCourseRouter)
app.use('/admin/courses/:courseId',editCourseRouter)
app.use('/admin/courses',getAllCoursesRouter)

//User Routes
app.use('/users/signup',signupUserRouter)
app.use('/users/login',signinUserRouter)
app.use('/users/courses',getCoursesRouter)
app.use('/users/courses/:courseId',purchaseNewCourseRouter)
app.use('/users/purchasedCourses',purchasedCoursesRouter)

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

module.exports = app;
