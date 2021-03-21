const BaseDatabase = require('./base-database')
const Product = require('../models/product')

class ProductDatabase extends BaseDatabase {
  findByName(name) {
    return this.findBy('name', name)
  }
}

module.exports = new ProductDatabase(Product)
