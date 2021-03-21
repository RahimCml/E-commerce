class Seller {
  constructor(name) {
    this.name = name
  }

  static create({ name }) {
    return new Seller(name)
  }
}

module.exports = Seller
