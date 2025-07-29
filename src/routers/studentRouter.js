const express = require('express');
const { handleGetClassEightStudents, handleFeedback, handleInsertDemoStudents, handleGetClassHscStudents } = require('../controllers/studentsController');
const { handleLogin } = require('../controllers/authController');
const studentRouter = express.Router();

studentRouter.get('/eight',handleGetClassEightStudents);
studentRouter.get('/hsc',handleGetClassHscStudents);
studentRouter.post('/insertDemoStudent',handleInsertDemoStudents);
studentRouter.post('/login',handleLogin);
studentRouter.post('/feedback',handleFeedback);


module.exports = studentRouter;