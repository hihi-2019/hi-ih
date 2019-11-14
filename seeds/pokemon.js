
exports.seed = (knex, promise) => {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        { poke_name: 'bulbasaur', user_id: 1 },
        { poke_name: 'ivysaur', user_id: 2 },
        { poke_name: 'charmander', user_id: 3 },
        { poke_name: 'charizard', user_id: 4 },
        { poke_name: 'squirtle', user_id: 5 },
        { poke_name: 'blastoise', user_id: 6 },
        { poke_name: 'caterpie', user_id: 7 },
        { poke_name: 'metapod', user_id: 8 },
        { poke_name: 'butterfree', user_id: 9 },
        { poke_name: 'weedle', user_id: 10 },
        { poke_name: 'kakuna', user_id: 11 },
        { poke_name: 'beedrill', user_id: 12 },
        { poke_name: 'pidgey', user_id: 13 },
        { poke_name: 'pidgeotto', user_id: 14 },
        { poke_name: 'pidgeot', user_id: 15 },
        { poke_name: 'rattata', user_id: 16 },
        { poke_name: 'raticate', user_id: 17 },
        { poke_name: 'spearow', user_id: 18 },
        { poke_name: 'fearow', user_id: 19 },
        { poke_name: 'ekans', user_id: 20 },
        { poke_name: 'arbok', user_id: 21 },
        { poke_name: 'pikachu', user_id: 22 },
        { poke_name: 'raichu', user_id: 1 },
        { poke_name: 'sandshrew', user_id: 2 },
        { poke_name: 'sandslash', user_id: 3 },
        { poke_name: 'clefariy', user_id: 4 },
        { poke_name: 'clefable', user_id: 5 },
        { poke_name: 'vulpix', user_id: 6 },
        { poke_name: 'ninetales', user_id: 7 },
        { poke_name: 'jigglypuff', user_id: 8 },
        { poke_name: 'wigglytuff', user_id: 9 },
        { poke_name: 'zubat', user_id: 10 },
        { poke_name: 'golbat', user_id: 11 },
        { poke_name: 'oddish', user_id: 12 },
        { poke_name: 'gloom', user_id: 13 },
        { poke_name: 'vileplume', user_id: 14 },
        { poke_name: 'paras', user_id: 15 },
        { poke_name: 'parasect', user_id: 16 },
        { poke_name: 'venonat', user_id: 17 },
        { poke_name: 'venomoth', user_id: 18 },
        { poke_name: 'diglett', user_id: 19 },
        { poke_name: 'dugtrio', user_id: 20 },
        { poke_name: 'meowth', user_id: 21 },
        { poke_name: 'persian', user_id: 22 },
        { poke_name: 'psyduck', user_id: 1 },
        { poke_name: 'golduck', user_id: 2 },
        { poke_name: 'mankey', user_id: 3 },
        { poke_name: 'primeape', user_id: 4 },
        { poke_name: 'growlithe', user_id: 5 },
        { poke_name: 'arcanine', user_id: 6 },
        { poke_name: 'poliwag', user_id: 7 },


























      ]);
    });
};
