
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_num: 1, description: 'Use VSCode to install KNEX, and write out some amazing migrations and seeds', notes: 'important', completed: false, project_id: 1}, // 1
        {task_num: 2, description: 'Make those endpoints click!', notes: 'not necessary. just kidding.', completed: false, project_id: 1}, // 2
        {task_num: 3, description: 'Upload it to the mothership.', notes: 'Goldbloom technique', completed: false, project_id: 1}, // 3
        {task_num: 1, description: 'Make Beats', notes: 'with love', completed: false, project_id: 2}, // 4
        {task_num: 2, description: 'Dance', notes: 'with or without shoes', completed: false, project_id: 2}, // 5
        {task_num: 1, description: 'Write notes on cards', notes: 'with loves', completed: false, project_id: 3}, // 6
        {task_num: 2, description: 'Mail cards.', notes: 'all over the world!', completed: false, project_id: 3}, // 6
      ]);
    });
};
