const Customer = require ('./models/customer')
const Seller = require ('./models/seller')
const Product = require ('./models/product')
const printSelectHistory = require('./lib/printSelectHistory')
const {customerDatabase, sellerDatabase, productDatabase} = require ('./database')

const pasha =  Customer.create({name: 'Pasha', address: 'Baku'})
const kenan = Customer.create({name:'Kenan', address: 'Ganja'})

const chuba = Seller.create({name: 'Chuba'})
const chanel = Seller.create({name: 'Chanel'})
const cucci = Seller.create({name: 'Cucci'})

const jeans = Product.create({productName:'Jeans', price: 50})
const sweater = Product.create({productName:'Sweater', price: 65})
const tShirt = Product.create({productName:'T-shirt', price: 15})
const parfum = Product.create({productName:'Parfum', price:90})

pasha.buyProduct (jeans, cucci)
pasha.buyProduct (sweater, chuba)
pasha.buyProduct (tShirt, chanel)
kenan.buyProduct (parfum, chanel)

// customers save yapiyor 
customerDatabase.save([pasha, kenan])
sellerDatabase.save([chuba, cucci, chanel])
// productDatabase.save([jeans, sweater, tShirt, parfum])


const leyla = Customer.create({name: 'Leyla', address: 'Karabakh'})

customerDatabase.insert( leyla, 'customers')

// leyla.buyProduct(tShirt, chuba)
// secilen indexdeki customeri silir 
// customerDatabase.remove( , 'customers')

// customers load yapiyor
const customers = customerDatabase.load()
customers.forEach(printSelectHistory)

// aranin bir seyin bulunmasi name, address
console.log(customerDatabase.findBy('name', 'Leyla'))
console.log(sellerDatabase.findBy('name', 'Cucci'))
// console.log(productDatabase.findBy('productName', 'parfum'))
// console.log(customers[0])
// console.log(leyla)
// customers.forEach(p => console.log(p.name))