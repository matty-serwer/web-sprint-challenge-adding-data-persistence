const db = require('./../../data/dbConfig');

module.exports = {
  get() {
    return db('resources');
  },
  insert(resource) {
    return db('resources')
      .insert(resource)
      .then(([id]) => {
        return db('resources').where('resource_id', id);
      });
  },
};
