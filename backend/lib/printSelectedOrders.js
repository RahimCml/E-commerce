function printSelectedOrders(selectedOrder) {
	console.log(
		` ${selectedOrder.customer.name} chosen the ${selectedOrder.products.name} from ${selectedOrder.seller.name}, price: ${selectedOrder.products.price}`
	);
}
console.log();
function printOrders(customer) {
	if (customer.orders.length === 0)
		return console.log(`${customer.name}'s basket is empty`);

	customer.orders.forEach(printSelectedOrders);
}

module.exports = printOrders;
