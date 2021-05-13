const app = require('../')
const request = require('supertest')(app)

test('creates a new product', async (done) => {
  const productToCreate = {
    name: 'Jeans',
    seller: ['Chanel'],
    size: 'l',
    price: 20,
  }

  const response = await request
    .post('/products')
    .send(productToCreate)
    .expect(200)

  const productCreated = response.body

  done()
})
