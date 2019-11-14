const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
})

router.get('/users/:id', (req, res) => {
  db.getUserPokemon(req.params.id)
    .then(pokemon => {
      console.log(pokemon)
      res.json(pokemon)
    })
})

router.post('/user/:id/:pokeName', (req, res) => {
  let id = req.params.id
  let pokeName = req.params.pokeName

  db.addPokemon(id, pokeName)
  .then(x => x)

})


router.delete('/user/:id/:pokeName', (req, res) => {
  let id = req.params.id
  let pokeName = req.params.pokeName

  db.deletePokemon(id, pokeName)
  .then(x => x)
})



// router.get('users/:id/:pokeName', (req, res) => {
//   const id = req.params.id
//   const pokeName = req.params.pokeName

//   db.getPokemon(id, pokeName)
//   .then(pokemon =>{
//     res.json(pokemon)
//   })
// })

module.exports = router