const path = require('path')
const express = require('express')

const users = require('./routes/users')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/', users)

module.exports = server
