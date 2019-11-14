
exports.up = (knex, promise) => {
  return knex.schema.createTable('users', function (table) {
      table.increments('userId').primary()
      table.string('name')
      table.string('element')
  })
};

exports.down = (knex, promise) =>  {
  return knex.schema.dropTable('users')
};
