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


function addPokemon(id, pokeName, db = connection) {
  return db('pokemon')
  .insert({
    user_id: id,
    poke_name: pokeName
  })
}


function getPokemon(pokeName, db = connection) {
  return db('pokemon')
  .where('poke_name', pokeName)
  .first()
}

function deletePokemon(id, pokeName, db = connection) {
  return db('pokemon')
  .where('user_id', id)
  .where('poke_name', pokeName)
  .del()
}


// function getPokemon(id, pokeName) {
//   return db('users')
//     .where('id', id)
//     .select('pokemon_name', 'pokemon_type', 'pokemon_level')
//   // Do I need to map through these to get them all?
// }

module.exports = {
  getUsers,
  getUserPokemon,
  addPokemon,
  deletePokemon,
  getPokemon,
  // getPokemon,
}

getUsers()