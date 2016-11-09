
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var mongoose = require('./app/models/db');
var express = require('./config/express');
var passport = require('./config/passport');


var db = mongoose();

var app = express();

var passport = passport();


app.listen(process.env.PORT || 3000);
module.exports = app;
