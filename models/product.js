class Product {
    constructor(productName, price, seller, customer ){
        this.productName = productName
        this.price = price
        this.seller = seller 
        this.customer = customer     
    }
    static create({name, price}) {
        return new Product(name, price)
    }
    
}
module.exports = Product