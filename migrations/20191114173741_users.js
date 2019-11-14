
exports.up = (knex, promise) => {
  return knex.schema.createTable('Users', function (table) {
      table.increments('userId').primary()
      table.string('name')
      table.string('element')
  })
};

exports.down = (knex, promise) =>  {
  return knex.schema.dropTable('Users')
};
