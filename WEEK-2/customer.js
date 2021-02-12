const Product = require('./product')

class Customer {
    constructor(name, address){
        this.name = name
        this.address = address // seller'in customer addressini gormesini asgla 
        this.selectedProducts = []

    }
    buyProduct (address, name,  seller){
        const selectedproduct = new Product( seller, this, name ,address)

        this.selectedProducts.push(selectedproduct)

        return selectedproduct

    }
}

module.exports = Customer