
exports.seed = (knex, promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, name: 'Ethan', element: 'Champion'},
        {user_id: 2, name: 'Freya', element: 'Biker'},
        {user_id: 3, name: 'Cass', element: 'Biker'},
        {user_id: 4, name: 'Rob', element: 'Cool Trainer'},
        {user_id: 5, name: 'Alice', element: 'Blackbelt'},
        {user_id: 6, name: 'Bas', element: 'Biker'},
        {user_id: 7, name: 'Edgars', element: 'Hiker'},
        {user_id: 8, name: 'Caitlin', element: 'Bird Keeper'},
        {user_id: 9, name: 'Charlie', element: 'Psychic'},
        {user_id: 10, name: 'Cherise', element: 'Scientist'},
        {user_id: 11, name: 'Fraser', element: 'Rocker'},
        {user_id: 12, name: 'Joseph', element: 'Rocker'},
        {user_id: 13, name: 'Nisida', element: 'Cool Trainer'},
        {user_id: 14, name: 'Richard', element: 'Gentleman'},
        {user_id: 15, name: 'Sophie', element: 'Hiker'},
        {user_id: 16, name: 'Tosca', element: 'Hiker'},
        {user_id: 17, name: 'Vere', element: 'Burglar'},
        {user_id: 18, name: 'Ross', element: 'Gambler'},
        {user_id: 19, name: 'Kelly', element: 'Gambler'},
        {user_id: 20, name: 'Han', element: 'Gambler'},
        {user_id: 21, name: 'Ming', element: 'Gambler'},
        {user_id: 22, name: 'Ollie', element: 'Gambler'},
      ]);
    });
};
