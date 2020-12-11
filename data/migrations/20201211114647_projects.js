exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("name", 128).notNullable();
      table.string("description").notNullable();
      table.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("name", 128).notNullable().unique();
      table.string("description");
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.integer("task_num").unsigned();
      table.string("description").notNullable();
      table.string("notes");
      table.boolean("completed").notNullable().defaultTo(false);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("project_resources", (table) => {
      table.increments("id");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
