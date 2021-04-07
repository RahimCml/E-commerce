const uuid = require('uuid')

class Product {
  constructor(id = uuid.v4(), name, price, product, seller, customer) {
    this.id = id
    this.name = name
    this.product = product
    this.price = price
    this.seller = seller
    this.customer = customer
  }
  static create({ id, name, price, seller }) {
    return new Product(id, name, price, seller)
  }
}
module.exports = Product
