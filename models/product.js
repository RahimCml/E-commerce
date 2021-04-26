const uuid = require('uuid')
const Seller = require('./seller')

class Product {
  constructor(
    id = uuid.v4(),
    name,
    price,
    product,
    seller,
    customer,
    info = [],
  ) {
    this.id = id
    this.name = name
    this.product = product
    this.price = price
    this.seller = seller
    this.customer = customer
    this.info = info
  }

  infoProduct(seller) {
    const hasInfo = new Seller(seller)

    this.info.push(hasInfo)

    return hasInfo
  }
  static create({ id, name, price, seller }) {
    return new Product(id, name, price, seller)
  }
}
module.exports = Product
