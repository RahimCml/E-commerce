function printSelect (selectedProduct) {
    console.log(`${selectedProduct.customer.name} has chosen the ${selectedProduct.productName.productName} from ${selectedProduct.seller.name}, address: ${selectedProduct.customer.address}, price: ${selectedProduct.productName.price}`)
}

function printSelectHistory(customer){
        if (customer.basket.length === 0)
        return console.log (`${customer.name} basket is empty `)
        
    customer.basket.forEach(printSelect)
}

module.exports = printSelectHistory