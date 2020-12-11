
const express = require("express");
const router = express.Router();
const Task = require('./model');

// adding a new task - [POST] /api/tasks
// retrieving all tasks - [GET] /api/tasks Each task must include project_name and project description so you will need to join tables

module.exports = router;