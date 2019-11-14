const config = require('../../knexfile').development
const db = require('knex')(config)
const utils = require('./utils')

function getUsers(id) {
  return db('Users')
  .where('id', id)
  .first()
}


function getAllPokemon() {
  return db('pokemon')
  .select()
}


function getPokemon(id, pokeId) {
  return db('Users')
  .where('id', id)
  .select('pokemon_name', 'pokemon_type', 'pokemon_level')
  // Do I need to map through these to get them all?
}

module.exports = {
  getUsers,
  getAllPokemon,
  getPokemon,
}