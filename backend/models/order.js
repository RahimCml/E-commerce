const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  products: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    autopopulate: { maxDepth: 1 },
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
    autopopulate: { maxDepth: 1 },
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    autopopulate: { maxDepth: 1 },
  },
  address: String,
  totalPrice: String,
  date: String,
});

OrderSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Order', OrderSchema);
