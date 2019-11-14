const path = require('path')
const express = require('express')

const users = require('./routes/users')
const pokemon = require('./routes/pokemon')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', users)
server.use('/api/v1/pokemon', pokemon)

module.exports = server
