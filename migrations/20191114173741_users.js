
exports.up = (knex, promise) => {
  return knex.schema.createTable('users', function (table) {
      table.increments('user_id').primary()
      table.string('name')
      table.string('element')
  })
};

exports.down = (knex, promise) =>  {
  return knex.schema.dropTable('users')
};
