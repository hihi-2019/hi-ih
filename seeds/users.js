
exports.seed = (knex, promise) => {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {userId: 1, name: 'Ethan', element: 'Rock'},
        {userId: 2, name: 'Freya', element: 'fire'},
        {userId: 3, name: 'Cass', element: 'water'},
        {userId: 4, name: 'Rob', element: 'fire'},
        {userId: 5, name: 'Alice', element: 'Grass'},
        

      ]);
    });
};
