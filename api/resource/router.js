
const express = require("express");
const router = express.Router();
const Resource = require('./model');

// adding a new resource - [POST] /api/resources
// retrieving all resources - [GET] /api/resources

// middlewares
const validateResource =  (req, res, next) => {
  if (!req.body) {
    res.status(400).json({ message: "Missing resource data" });
  } else if (!req.body.name) {
    res
      .status(400)
      .json({ message: "Resource name is required" });
  } else {
    next();
  }
}

// endpoints

router.get('/', (req, res) => {
  Resource.get()
    .then(resources => {
      res.json(resources);
    })
    .catch(e => {
      res.status(500).json({ message: e.message });
    })
})

router.post('/', validateResource, (req, res) => {
  Resource.insert(req.body)
    .then(resource => {
      res.json(resource[0]);
    })
    .catch(e => {
      res.status(500).json({ message: e.message });
    })
})

module.exports = router;