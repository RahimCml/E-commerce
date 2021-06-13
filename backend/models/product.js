const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sellers: [{ type: String, ref: 'Seller', required: true }],
  size: { type: String, required: true },
  customer: { type: String },
  price: { type: Number, required: true },
})

module.exports = mongoose.model('Product', ProductSchema)
