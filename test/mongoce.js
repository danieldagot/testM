const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Schema = new Schema({
    name: Number,
    updatedAt: Date,
    temperature: Number, 
    condition: String,
    conditionPic:String
})

const City = mongoose.model("city", Schema)
module.exports = Schema