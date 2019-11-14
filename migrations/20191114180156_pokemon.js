
exports.up = (knex, promise) => {
  return knex.schema.createTable('Pokemon', function (table) {
      table.increments('pokeId').primary()
      table.integer('userId')
  })
};

exports.down = (knex, promise) => {
  return knex.schema.dropTable('Pokemon')
};
