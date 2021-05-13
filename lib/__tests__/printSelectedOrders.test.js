const printSelectedOrders = require('../printSelectedOrders')

test('prints customer orders when a customer has a selected Order', () => {
  // initialization
  const customer = {
    name: 'Kenan',
    orders: [],
  }
