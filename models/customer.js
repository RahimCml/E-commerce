const Order = require("./order");
const uuid = require("uuid");

class Customer {
	constructor(id = uuid.v4(), name, address, orders = [], basket = []) {
		this.id = id;
		this.name = name;
		this.address = address; // seller'in customer addressini gormesini asgla
		this.basket = basket;
		this.orders = orders;
	}
	buyProduct(products, seller) {
		const selectedOrder = new Order(products, seller, this);

		this.orders.push(selectedOrder);

		return selectedOrder;
	}
	static create({ id, name, address, orders, basket }) {
		return new Customer(id, name, address, orders, basket);
	}
}

module.exports = Customer;
