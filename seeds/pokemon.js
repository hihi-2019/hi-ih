
exports.seed = (knex, promise) => {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        { poke_id: 1, user_id: 'bulbasaur' },
        { poke_id: 3, user_id: 'ivysaur' },
        { poke_id: 4, user_id: 'charmander' },
        { poke_id: 6, user_id: 'charizard' },
        { poke_id: 7, user_id: 'squirtle' },
        { poke_id: 9, user_id: 'blastoise' },
        { poke_id: 10, user_id: 'caterpie' },
        { poke_id: 11, user_id: 'metapod' },
        { poke_id: 12, user_id: 'butterfree' },
        { poke_id: 13, user_id: 'weedle' },
        { poke_id: 14, user_id: 'kakuna' },
        { poke_id: 15, user_id: 'beedrill' },
        { poke_id: 16, user_id: 'pidgey' },
        { poke_id: 17, user_id: 'pidgeotto' },
        { poke_id: 18, user_id: 'pidgeot' },
        { poke_id: 19, user_id: 'rattata' },
        { poke_id: 20, user_id: 'raticate' },
        { poke_id: 21, user_id: 'spearow' },
        { poke_id: 22, user_id: 'fearow' },
        { poke_id: 23, user_id: 'ekans' },
        { poke_id: 24, user_id: 'arbok' },
        { poke_id: 25, user_id: 'pikachu' },
        { poke_id: 26, user_id: 'raichu' },
        { poke_id: 27, user_id: 'sandshrew' },
        { poke_id: 28, user_id: 'sandslash' },
        { poke_id: 35, user_id: 'clefariy' },
        { poke_id: 36, user_id: 'clefable' },
        { poke_id: 37, user_id: 'vulpix' },
        { poke_id: 38, user_id: 'ninetales' },
        { poke_id: 39, user_id: 'jigglypuff' },
        { poke_id: 40, user_id: 'wigglytuff' },
        { poke_id: 41, user_id: 'zubat' },
        { poke_id: 42, user_id: 'golbat' },
        { poke_id: 43, user_id: 'oddish' },
        { poke_id: 44, user_id: 'gloom' },
        { poke_id: 45, user_id: 'vileplume' },
        { poke_id: 46, user_id: 'paras' },
        { poke_id: 47, user_id: 'parasect' },
        { poke_id: 48, user_id: 'venonat' },
        { poke_id: 49, user_id: 'venomoth' },
        { poke_id: 50, user_id: 'diglett' },
        { poke_id: 51, user_id: 'dugtrio' },
        { poke_id: 52, user_id: 'meowth' },
        { poke_id: 53, user_id: 'persian' },
        { poke_id: 54, user_id: 'psyduck' },
        { poke_id: 55, user_id: 'golduck' },
        { poke_id: 56, user_id: 'mankey' },
        { poke_id: 57, user_id: 'primeape' },
        { poke_id: 58, user_id: 'growlithe' },
        { poke_id: 59, user_id: 'arcanine' },
        { poke_id: 60, user_id: 'poliwag' },


























      ]);
    });
};
