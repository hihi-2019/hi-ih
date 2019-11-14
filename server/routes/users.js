const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
})

router.get('users/:id', (req, res) => {
  db.getUserPokemon(req.params.id)
    .then(pokemon => {
      res.json(pokemon)
    })
})

// router.get('users/:id/:pokeId', (req, res) => {
//   const id = req.params.id
//   const pokeId = req.params.pokeId

//   db.getPokemon(id, pokeId)
//   .then(pokemon =>{
//     res.json(pokemon)
//   })
// })

module.exports = router