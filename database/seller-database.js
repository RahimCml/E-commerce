const BaseDatabase = require ('./base-database')
const Seller = require ('../models/seller')

class SellerDatabase extends BaseDatabase {
    findByName (name) {
        return this.findBy('name', name)
    }
    
}

module.exports = new SellerDatabase (Seller)