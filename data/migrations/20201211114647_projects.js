
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("name", 128).notNullable();
      table.string("description").notNullable();
      
    })
};

exports.down = function(knex) {
  
};
