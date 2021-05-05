const BaseDatabase = require('./base-database')
const Customer = require('../models/customer')

class CustomerDatabase extends BaseDatabase {
  async findByName(name) {
    return this.findBy('name', name)
  }
  async findByAddress(address) {
    return this.findBy('address', address)
  }
}

module.exports = new CustomerDatabase(Customer)
