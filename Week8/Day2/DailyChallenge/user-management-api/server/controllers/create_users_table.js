exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('email').notNullable();
      table.string('username').notNullable().unique();
      table.string('first_name');
      table.string('last_name');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };