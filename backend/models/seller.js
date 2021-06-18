const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
  name: String,
  product: String,
  email: String,
  customer: String,
  price: Number,
  address: String,
});

module.exports = mongoose.model('Seller', SellerSchema);
