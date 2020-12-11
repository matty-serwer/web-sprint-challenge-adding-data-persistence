
const express = require("express");
const router = express.Router();
const Project = require('./model');

// adding a new project - [POST] /api/projects
// retrieving all projects - [GET] /api/projects

// middlewares
const validateProject =  (req, res, next) => {
  if (!req.body) {
    res.status(400).json({ message: "Missing aproject data" });
  } else if (!req.body.name) {
    res
      .status(400)
      .json({ message: "Project name is required" });
  } else {
    next();
  }
}

// endpoints

router.get('/', (req, res) => {
  Project.get()
    .then(projects => {
      projects.forEach(project => {
        project.completed = Boolean(project.completed)
      })
      res.json(projects);
    })
    .catch(e => {
      res.status(500).json({ message: e.message });
    })
})

router.post('/', validateProject, (req, res) => {
  Project.insert(req.body)
    .then(project => {
      project[0].completed = Boolean(project[0].completed)
      res.json(project);
    })
    .catch(e => {
      res.status(500).json({ message: e.message });
    })
})

module.exports = router;