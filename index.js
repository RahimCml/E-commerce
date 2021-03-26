const express = require('express')
const ProductDatabase = require('./database/product-database')
const flatted = require('flatted')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/product', async (req, res) => {
  const product = await ProductDatabase.load()
  res.render('product', { product })
  //   res.send(flatted.stringify(prodcut))
})

app.listen(3000, () => {
  console.log('started listening on 3000')
})
