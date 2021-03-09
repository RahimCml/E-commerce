const {customerDatabase, sellerDatabase, productDatabase} = require ('./database')
const printSelectHistory = require('./lib/printSelectHistory')


const pasha = customerDatabase.findBy('name', 'Kenan')
 
printSelectHistory(pasha)

