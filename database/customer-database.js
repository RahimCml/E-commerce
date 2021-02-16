const BaseDatabase = require ('./base-database')
const Customer = require ('../models/customer')

class CustomerDatabase extends BaseDatabase {
    findByName (name) {
        return this.load().find(o => o.name == name)
    }
    findByAddress (address) {
        return this.load().find(o => o.address == address)
    }
 
}

module.exports = new CustomerDatabase (Customer)