const express = require('express')
const db = require('../db/db')
const router = express.Router()
const request = require('superagent') 


router.get('/', (req, res) => {
  request.get('http://pokeapi.co/api/v2/pokemon/?limit=200')
  .then(pokemon => {
    res.json(pokemon.body.results)    
  })
})

router.get('/:url', (req, res) => {
  request.get(url)
  .then(pokemon => {
    const pokeObj = pokemon.body
    res.json({
      name: pokeObj.name,
      abilities: pokeObj.abilities,
      type: pokeObj.types[0].type.name,
      img: pokeObj.sprites.front_default,
      weight: pokeObj.weight
    })    
  })
})

module.exports = router