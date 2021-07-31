const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()

const db = require('./config/connection')

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

const errorHandler = require('./middleware/errorHandler');
const ErrorResponse = require('./utils/ErrorResponse');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.connect((err)=> {
  if (err) console.log('Database Connection Problelm' + err)
  console.log('Database Connected')
})

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(new ErrorResponse(404))
});

// error handler
app.use(errorHandler) 

module.exports = app;
