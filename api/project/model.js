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
};
