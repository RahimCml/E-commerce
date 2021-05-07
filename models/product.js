const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  product: String,
  seller: String,
  customer: String,
  price: Number,
})

module.exports = mongoose.model('Product', ProductSchema)
