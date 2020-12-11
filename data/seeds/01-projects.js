
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Express Server', description: 'Build an express server that utilizes an SQL database with knex.'}, // 1
        {name: 'Project two', description: 'Make a future-tech track utilizing latin beats in Logic Pro.'}, // 2
        {name: 'Project three', description: 'Write christmas cards. Happy Hannukah!'}, // 3
      ]);
    });
};
