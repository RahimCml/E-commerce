const Product = require("./product");
const uuid = require("uuid");

class Order {
	constructor(
		products = [],
		seller,
		customer,
		price,
		totalPrice,
		amount,
		date,
		address
	) {
		this.products = products;
		this.seller = seller;
		this.customer = customer;
		this.price = price;
		this.totalPrice = totalPrice;
		this.amount = amount;
		this.date = date;
		this.address = address;
	}
	// 	static create({ name, price, products }) {
	// 		return new Order(name, price, products);
	// 	}
}
module.exports = Order;
