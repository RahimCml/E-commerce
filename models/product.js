class Product {
	constructor(name, price, product, seller, customer) {
		this.name = name;
		this.product = product;
		this.price = price;
		this.seller = seller;
		this.customer = customer;
	}
	static create({ name, price }) {
		return new Product(name, price);
	}
}
module.exports = Product;
