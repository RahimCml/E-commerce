class SelectedProduct {
    constructor(address, customer, selectProduct, seller){
        this.seller = seller 
        this.customer = customer
        this.address = address
        this.selectProduct = selectProduct
    }
}

module.exports = SelectedProduct