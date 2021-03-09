const {customerDatabase, sellerDatabase, productDatabase} = require ('./database')
const printSelectHistory = require('./lib/printSelectHistory')

    async function main() {
        const kenan = await customerDatabase.findBy('name', 'Kenan')
        printSelectHistory(kenan)
    }
    
main()