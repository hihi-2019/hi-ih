
exports.seed = (knex, promise) => {
  // Deletes ALL existing entries
  return knex('Users').del()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {userId: 1, name: 'Ethan', element: 'Champion'},
        {userId: 2, name: 'Freya', element: 'Biker'},
        {userId: 3, name: 'Cass', element: 'Biker'},
        {userId: 4, name: 'Rob', element: 'Cool Trainer'},
        {userId: 5, name: 'Alice', element: 'Blackbelt'},
        {userId: 6, name: 'Bas', element: 'Biker'},
        {userId: 7, name: 'Edgars', element: 'Hiker'},
        {userId: 8, name: 'Caitlin', element: 'Bird Keeper'},
        {userId: 9, name: 'Charlie', element: 'Psychic'},
        {userId: 10, name: 'Cherise', element: 'Scientist'},
        {userId: 11, name: 'Fraser', element: 'Rocker'},
        {userId: 12, name: 'Joseph', element: 'Rocker'},
        {userId: 13, name: 'Nisida', element: 'Cool Trainer'},
        {userId: 14, name: 'Richard', element: 'Gentleman'},
        {userId: 15, name: 'Sophie', element: 'Hiker'},
        {userId: 16, name: 'Tosca', element: 'Hiker'},
        {userId: 17, name: 'Vere', element: 'Burglar'},
        {userId: 18, name: 'Ross', element: 'Gambler'},
        {userId: 19, name: 'Kelly', element: 'Gambler'},
        {userId: 20, name: 'Han', element: 'Gambler'},
        {userId: 21, name: 'Ming', element: 'Gambler'},
        {userId: 22, name: 'Ollie', element: 'Gambler'},
      ]);
    });
};
