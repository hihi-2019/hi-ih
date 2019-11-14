const config = require('../../knexfile').development
const connection = require('knex')(config)

function getUsers(db = connection) {
  return db('users').select()
 
}


function getUserPokemon(id, db = connection) {
  return db('pokemon')
    .select()
    .where('user_id', id)
}


// function getPokemon(id, pokeId) {
//   return db('users')
//     .where('id', id)
//     .select('pokemon_name', 'pokemon_type', 'pokemon_level')
//   // Do I need to map through these to get them all?
// }

module.exports = {
  getUsers,
  getUserPokemon,
  // getPokemon,
}

getUsers()