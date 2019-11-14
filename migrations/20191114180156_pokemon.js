
exports.up = (knex, promise) => {
  return knex.schema.createTable('pokemon', function (table) {
      table.increments('poke_id').primary()
      table.integer('user_id')
  })
};

exports.down = (knex, promise) => {
  return knex.schema.dropTable('pokemon')
};
