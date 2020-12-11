const db = require("./../../data/dbConfig");

module.exports = {
  get() {
    return db("projects");
  },
  insert(project) {
    return db("projects")
      .insert(project)
      .then(([id]) => {
        return db("projects").where("project_id", id);
      });
  },
  getById(id) {
    const projectObject = db("projects").where("project_id", id).first();
    if(!projectObject) {
      return null
    } else {
      return projectObject
    }
  }
};
