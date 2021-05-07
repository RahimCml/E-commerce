const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: String,
  product: String,
  sellerName: String,
  customer: String,
  price: Number,
})

module.exports = mongoose.model('Product', ProductSchema)
