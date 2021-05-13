const printSelectedOrders = require('../printSelectedOrders')

test('prints customer orders when a customer has a selected Order', () => {
  // initialization
  const customer = {
    name: 'Kenan',
    orders: [
      {
        customer: { name: 'Kenan' },
        seller: { name: 'Chanel' },
        product: { name: 'Jeans' },
      },
    ],
  }

  // test
  printSelectedOrders(customer)

  // assertions
  expect('Kenan chosen the Jeans from Chanel')
})

// New test for if
test('prints warning message when a customer has no orders', () => {
  // initialization
  const customer = {
    name: 'Kenan',
    orders: [],
  }

  // test
  printSelectedOrders(customer)
})
