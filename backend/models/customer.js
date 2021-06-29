const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  address: { type: String, required: true },
  email: { type: String, required: true },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
});

CustomerSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Customer', CustomerSchema);
