const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  const id = req.params.id // Not sure how to pass the id through to here. will the click send one?

  db.getUsers(id)
  .then(users => {
    res.json(users)
  })
})

router.get('users/:id', (req, res) => {
  db.getAllPokemon()
  .then(pokemon => {
    res.json(pokemon)
  })
})

router.get('users/:id/:pokeId', (req, res) => {
  const id = req.params.id
  const pokeId = req.params.pokeId

  db.getPokemon(id, pokeId)
  .then(pokemon =>{
    res.json(pokemon)
  })
})

module.exports = router