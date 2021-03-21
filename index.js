const {
	customerDatabase,
	sellerDatabase,
	productDatabase,
} = require("./database");
const printSelectedOrders = require("./lib/printSelectedOrders");

async function main() {
	const kenan = await customerDatabase.findBy("name", "Kenan");
	printSelectedOrders(kenan);
}

main();
