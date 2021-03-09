function printSelect (selectedproduct) {
    console.log(`${selectedproduct.customer.name} has chosen the ${selectedproduct.productName.productName} from ${selectedproduct.seller.name}, address: ${selectedproduct.customer.address}, price: ${selectedproduct.productName.price}`)
}

function printSelectHistory(customer){
        if (customer.basket.length === 0)
        return console.log (`${customer.name} basket is empty `)
        
    customer.basket.forEach(printSelect)
}

module.exports = printSelectHistory