const app = require('../')
const request = require('supertest')(app)

test('creates a new seller', async (done) => {
  const sellerToCreate = {
    name: 'Chanel',
    product: 'Jeans',
  }

  done()
})