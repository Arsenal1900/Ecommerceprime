const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
title: {
    type: String,
    unique: true,
    required: true

},
  description: {
    type: String,
    required: true
    
  },
  size: String,
  color: String,
  price: { type: Number, required: true },
  category: { type: Array }
  
})

const productModel = mongoose.model('Product', productS)
module.exports = productModel

