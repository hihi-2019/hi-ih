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

module.exports = router