const db = require('./../../data/dbConfig');

module.exports = {
  //   select 
  //     t.task_id,
  //     t.task_num,
  //     t.description,
  //     t.notes,
  //     t.completed,
  //     p.name project_name,
  //     p.description project_description
  // from tasks t
  // join projects p
  //     on t.project_id = p.project_id
    get() {
      return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_num', 't.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_description')
    },
    insert(task) {
      return db('tasks')
        .insert(task)
        .then(([id]) => {
          return db('tasks').where('task_id', id);
        });
    },
  };