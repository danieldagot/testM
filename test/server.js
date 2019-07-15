// Server setup
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000 
const api = require('./api')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))




app.use('/', api)
 
 


 
let socket = app.listen(port, () => console.log(`Running server on port ${port}`))
