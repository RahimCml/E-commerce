const SelectedProduct =  require('./selectProduct')

class Customer {
    constructor(name, address){
        this.name = name
        this.address = address // seller'in customer addressini gormesini asgla 
        this.selectedProducts = []

    }
    buyProduct ( address, selectProduct, seller){
        const selectedproduct = new SelectedProduct( seller, this , selectProduct, address)

        this.selectedProducts.push(selectedproduct)

        return selectedproduct

    }
}

module.exports = Customer