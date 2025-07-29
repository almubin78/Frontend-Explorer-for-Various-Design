const express = require('express');
const studentRouter = require('./routers/studentRouter');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// functional MiddleWare
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan('dev'))

// routers Middleware
app.use('/v1/students',studentRouter)

module.exports = app;

