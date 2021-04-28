const uuid = require('uuid')

class Seller {
  constructor(id = uuid.v4(), name) {
    this.id = id
    this.name = name
  }

  static create({ id, name }) {
    return new Seller(id, name)
  }
}

module.exports = Seller
