
exports.seed = (knex, promise) => {
  // Deletes ALL existing entries
  return knex('Pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('Pokemon').insert([
        {pokeId: 1, userId: 3},   //bulbasaur
        {pokeId: 3, userId: 7},   //ivysaur
        {pokeId: 4, userId: 4},   //charmander
        {pokeId: 6, userId: 1},   //charizard
        {pokeId: 7, userId: 3},   //squirtle
        {pokeId: 9, userId: 1},   //blastoise
        {pokeId: 10, userId: 8},  //caterpie
        {pokeId: 11, userId: 15},  //metapod
        {pokeId: 12, userId: 13},  //butterfree
        {pokeId: 13, userId: 7},  //weedle
        {pokeId: 14, userId: 14},  //kakuna
        {pokeId: 15, userId: 18},  //beedrill
        {pokeId: 16, userId: 8},  //pidgey
        {pokeId: 17, userId: 10},  //pidgeotto
        {pokeId: 18, userId: 8},  //pidgeot
        {pokeId: 19, userId: 22},  //rattata
        {pokeId: 20, userId: 18},  //raticate
        {pokeId: 21, userId: 20},  //spearow
        {pokeId: 22, userId: 21},  //fearow
        {pokeId: 23, userId: 17},  //ekans
        {pokeId: 24, userId: 17},  //arbok
        {pokeId: 25, userId: 5},  //pikachu
        {pokeId: 26, userId: 16},  //raichu
        {pokeId: 27, userId: 16},  //sandshrew
        {pokeId: 28, userId: 19},  //sandslash
        {pokeId: 35, userId: 20},  //clefariy
        {pokeId: 36, userId: 21},  //clefable
        {pokeId: 37, userId: 15},  //vulpix
        {pokeId: 38, userId: 5},  //ninetales
        {pokeId: 39, userId: 1},  //jigglypuff
        {pokeId: 40, userId: 2},  //wigglytuff
        {pokeId: 41, userId: 6},  //zubat
        {pokeId: 42, userId: 12},  //golbat
        {pokeId: 43, userId: 13},  //oddish
        {pokeId: 44, userId: 2},  //gloom
        {pokeId: 45, userId: 11},  //vileplume
        {pokeId: 46, userId: 4},  //paras
        {pokeId: 47, userId: 18},  //parasect
        {pokeId: 48, userId: 14},  //venonat
        {pokeId: 49, userId: 7},  //venomoth
        {pokeId: 50, userId: 9},  //diglett
        {pokeId: 51, userId: 11},  //dugtrio
        {pokeId: 52, userId: 17},  //meowth
        {pokeId: 53, userId: 18},  //persian
        {pokeId: 54, userId: 20},  //psyduck
        {pokeId: 55, userId: 19},  //golduck
        {pokeId: 56, userId: 15},  //mankey
        {pokeId: 57, userId: 22},  //primeape
        {pokeId: 58, userId: 9},  //growlithe
        {pokeId: 59, userId: 13},  //arcanine
        {pokeId: 60, userId: 12},  //poliwag




















        





      ]);
    });
};
