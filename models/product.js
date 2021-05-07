const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  seller: { type: String, required: true },
  size: { type: String, required: true },
  customer: { type: String },
  price: { type: Number, required: true },
})

module.exports = mongoose.model('Product', ProductSchema)
