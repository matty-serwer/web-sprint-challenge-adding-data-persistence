
const express = require("express");
const router = express.Router();
const Task = require('./model');
const Project = require('./../project/model');

// adding a new task - [POST] /api/tasks
// retrieving all tasks - [GET] /api/tasks Each task must include project_name and project description so you will need to join tables

const validateTask = (req, res, next) => {
  if(!req.body) {
    res.status(400).json({ message: "Error: Missing task body."})
  } else if (!req.body.description) {
    res.status(400).json({ message: "Error: description field required"})
  } 
  else if (!req.body.project_id) {
    res.status(400).json({ message: "Error: project_id field required"})
  } else {
    next();
  }
}

const validateProjectId = async (req, res, next) => {
  const id = req.body.project_id;
  try {
    const project = await Project.getById(id);
    if (!project) {
      res.status(404).json({ message: "Invalid project_id" });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

router.get('/', (req, res) => {
  Task.get()
    .then(tasks => {
      tasks.forEach(task => {
        task.completed = Boolean(task.completed)
      })
      res.status(200).json(tasks)
    })
    .catch(e => {
      res.status(500).json({ message: e.message });
    })
})

router.post('/', validateTask, validateProjectId, (req, res) => {
  Task.insert(req.body)
    .then(task => {
      task[0].completed = Boolean(task.completed)
      res.status(200).json(task[0]);
    })
    .catch(e => {
      res.status(500).json({ message: e.message });
    })
}) 


module.exports = router;