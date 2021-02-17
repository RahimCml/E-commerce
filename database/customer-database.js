const BaseDatabase = require ('./base-database')
const Customer = require ('../models/customer')

class CustomerDatabase extends BaseDatabase {
    findByName (name) {
        return this.findBy('name', name)
    }
    findByAddress (address) {
        return this.findBy('address', address)
    }
 
}

module.exports = new CustomerDatabase(Customer)