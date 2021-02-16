const Customer = require ('./models/customer')
const Seller = require ('./models/seller')
const Product = require ('./models/product')
const {customerDatabase, sellerDatabase} = require ('./database')

// const pasha =  Customer.create({name: 'Pasha', address: 'Baku'})
// const kenan = Customer.create({name:'Kenan', address: 'Ganja'})

// const chuba = Seller.create({name: 'Chuba'})
// const chanel = Seller.create({name: 'Chanel'})
const cucci = Seller.create({name: 'Cucci'})


const jeans = Product.create({name:'Jeans', price: 50})
// const sweater = Product.create({name:'Sweater', price: 530})
// const tShirt = Product.create({name:'T-shirt', price: 550})
// const parfum = Product.create({name:'Parfum', price:90})




// pasha.buyProduct (jeans, cucci)
// pasha.buyProduct (sweater, chuba)
// pasha.buyProduct (tShirt, chanel)
// kenan.buyProduct (parfum, chanel)

function printSelect (selectedproduct) {
    console.log(`${selectedproduct.customer.name} has chosen the ${selectedproduct.productName.productName} from ${selectedproduct.seller.name}, address: ${selectedproduct.customer.address}, price: ${selectedproduct.productName.price}`)
}

function printSelectHistory(customer){
        if (customer.basket.length === 0)
        return console.log (`${customer.name} basket is empty `)
        
    customer.basket.forEach(printSelect)
}


// const searchName = customerDatabase.findByName('Kenan')




// printSelectHistory(searchName)

// customerDatabase.save([pasha, kenan])
// customerDatabase.save([kenan, pasha])

// const customers = customerDatabase.load()
// customers.forEach(printSelectHistory)

const pasha = customerDatabase.findByName('Pasha')
 
pasha.buyProduct(jeans, cucci)
customerDatabase.update(pasha)
printSelectHistory(pasha) 



// kenan.buyProduct(jeans, chanel)
// customerDatabase.update(kenan)

 


// customers.forEach(p => console.log(p.name))
 
// printSelectHistory(kenan)
// printSelectHistory(kenan)
 