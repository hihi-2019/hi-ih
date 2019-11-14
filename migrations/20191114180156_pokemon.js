
exports.up = (knex, promise) => {
  return knex.schema.createTable('pokemon', function (table) {
      table.string('poke_name')
      table.integer('user_id')
  })
};

exports.down = (knex, promise) => {
  return knex.schema.dropTable('pokemon')
};
