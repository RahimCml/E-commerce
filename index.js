const {customerDatabase, sellerDatabase, productDatabase} = require ('./database')
const printSelectHistory = require('./lib/printSelectHistory')

const kenan = customerDatabase.findBy('name', 'Kenan')
 
printSelectHistory(kenan)
