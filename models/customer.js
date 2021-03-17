const Product = require("./product");
const uuid = require("uuid");

class Customer {
	constructor(id = uuid.v4(), name, address, basket = []) {
		this.id = id;
		this.name = name;
		this.address = address; // seller'in customer addressini gormesini asgla
		this.basket = basket;
	}
	buyProduct(productName, seller, price) {
		const selectedProduct = new Product(productName, price, seller, this);

		this.basket.push(selectedProduct);

		return selectedProduct;
	}

	static create({ id, name, address, basket }) {
		return new Customer(id, name, address, basket);
	}
	// user () {
	//     const chuba = new Seller('Chuba')
	//     const chanel = new Seller('Chanel')
	//     const cucci = new Seller('Cucci')
	// }
}

module.exports = Customer;
