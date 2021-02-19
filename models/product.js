class Product {
    constructor(productName, price, seller, customer ){
        this.productName = productName
        this.price = price
        this.seller = seller 
        this.customer = customer     
    }
    static create({productName, price}) {
        return new Product(productName, price)
    }
    
}
module.exports = Product