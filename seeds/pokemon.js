
exports.seed = (knex, promise) => {
  // Deletes ALL existing entries
  return knex('Pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('Pokemon').insert([
        {pokeId: 1, userId: 1},
        {pokeId: 2, userId: 2},
        {pokeId: 3, userId: 3}
      ]);
    });
};
