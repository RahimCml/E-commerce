const BaseDatabase = require ('./base-database')
const Product = require ('../models/product')

class ProductDatabase extends BaseDatabase {
    findByName(productName) {
        return this.findBy('productName', productName)
    }
    
}

module.exports = new ProductDatabase (Product)