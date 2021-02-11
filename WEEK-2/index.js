//customer
//seller
//product


class Customer {
    constructor(name, address){
        this.name = name
        this.address = address // seller'in customer addressini gormesini asgla 
        this.selectedProducts = []

    }
    Products( origin, selectProduct, seller){
        const selectedproduct = new selectedProduct( seller, this , selectProduct, origin)

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
    constructor(origin, customer, selectProduct, seller){
        this.seller = seller 
        this.customer = customer
        this.origin = origin
        this.selectProduct = selectProduct

    }
}

const pasha = new Customer('Pasha', 'Baku')
const chuba = new Seller('Chuba')
const cucci = new Seller('Cucci')
 
pasha.Products(chuba, 'Sweater', 'Baku')
pasha.Products(cucci, 'Jeans', 'Kharabah')
console.log(pasha.selectedProducts)
console.log(`${pasha.name} has ${pasha.selectedProducts.length} Select`)
console.log(`${pasha.name} has chosen the ${pasha.selectedProducts[0].selectProduct} from ${chuba.name}`)