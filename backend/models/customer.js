const mongoose = require("mongoose");
const Order = require('./order')

const CustomerSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 2 },
	address: { type: String, required: true },
  	email: { type: String, required: true },
	orders: [
		{
			type: String,
			ref: 'Order'
		},
	],
});

CustomerSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Customer", CustomerSchema);
