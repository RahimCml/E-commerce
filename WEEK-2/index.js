//customer
//seller
//product


class Customer {
    constructor(name){
        this.name = name
        this.selectedProducts = []

    }
    Products(seller, selectProduct){
        const selectedproduct = new selectedProduct( seller, this , selectProduct)

        this.selectedProducts.push(selectedproduct)

    }
}

class Seller { 
    constructor(name){
        this.name = name
    }

}

// class Product {
//     constructor(name){
//         this.name = name
//     }
// }

class selectedProduct {
    constructor(seller, customer, product){
        this.seller = seller 
        this.customer = customer
        this.product = product
    }
}

const pasha = new Customer('Pasha')
const chuba = new Seller('Chuba')

pasha.Products(chuba, 'Sweater')