
exports.up = function(knex, Promise) {
  return knex.schema.createTable('card', table => {
    table.increments().unique();
    table.string('title').notNullable();
    table.string('priority').notNullable();
    table.string('status').defaultTo('queue');
    table.string('created_by').notNullable();
    table.string('assigned_to').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('card')

};
