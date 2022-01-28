const cors = require('cors')
const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)

//CORS MIDDLEWARE
app.use(cors())

//BODY PARSER MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Impoting Routes
const usersRoute = require('./routes/users')

//Running Routes
app.use('/users', usersRoute)

const PORT = process.env.PORT || 4000

server.listen(PORT, () => console.log(`Server running on port ${PORT} \nhttp://localhost:4000/`))