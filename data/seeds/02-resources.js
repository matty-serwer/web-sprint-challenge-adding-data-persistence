
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'VSCode', description: 'Fancy text editor.'}, // 1
        {name: 'KNEX', description: 'Databases are fun!'}, // 2
        {name: 'Computer', description: 'A real one. Not a paper keyboard.'}, // 3
        {name: 'Logic Pro X', description: 'Apples best piece of software.'}, // 4
        {name: 'Rhythm', description: 'You have it or you dont? Thats a phallacy!'}, // 5
        {name: 'Blank Christmas Cards', description: 'Leftover from last year.'}, // 6
        {name: 'Love', description: 'Love'}, // 7
      ]);
    });
};
