const express = require('express')
const Router = express.Router()
const path = require('path')
//  body-parser code here
const bodyParser = require('body-parser')
const request = require('request')



// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/city', { useNewUrlParser: true })


let key = "731063ee4c8f4c1289692047191007"

Router.get('/city/:cityName', function (request, response) {
    const url = `http://api.apixu.com/v1/current.json?key=731063ee4c8f4c1289692047191007&q=${request.params.cityName}` 
    request( url ,function(err,req)
    {
        let data = JSON.parse(req)
        response.send(data)
    })
    
 })
 
 Router.get('/cities', function (request, response) {

    response.send("ok")
 
 })
 
 

 Router.post('/city/:cityName', function (request, response) {

    response.send("ok")
 
 })


  Router.delete('/city', function (request, response) {

    response.send("ok")
 
 })

 
