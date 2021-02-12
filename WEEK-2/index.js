const Customer = require ('./customer')
const Seller = require ('./seller')

const pasha = new Customer('Pasha', 'Baku')
const kenan = new Customer('Kenan', 'Ganja')

const chuba = new Seller('Chuba')
const chanel = new Seller('Chanel')
const cucci = new Seller('Cucci')


const sProduct1 = pasha.buyProduct (cucci, 'Jeans')
const sProduct2 = pasha.buyProduct (chuba, 'Sweater')
const sProduct3 = pasha.buyProduct (chuba, 'T-shirt')
const sProduct4 = kenan.buyProduct (chanel, 'parfum')

// printSelectHistory()

 function printSelectHistory(customer){
    customer.selectedProducts.forEach(printSelect)
}

printSelectHistory(pasha)
printSelectHistory(kenan)

function printSelect (selectedproduct) {
    console.log(`${selectedproduct.customer.name} has chosen the ${selectedproduct.selectProduct} from ${selectedproduct.seller.name} address: ${selectedproduct.customer.address}`)
}

// console.log(`${pasha.name} has ${pasha.selectedProducts.length} Select`)