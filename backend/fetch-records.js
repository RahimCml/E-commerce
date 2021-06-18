const { customerService } = require('./services/customer-service');
const printSelectedOrders = require('./lib/printSelectedOrders');

async function main() {
  const kenan = await customerService.findBy('name', 'Kenan');
  printSelectedOrders(kenan);
}

main();
