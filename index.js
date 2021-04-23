const express = require('express')
const ProductDatabase = require('./database/product-database')
const flatted = require('flatted')
const productDatabase = require('./database/product-database')
const Product = require('./models/product')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/products', async (req, res) => {
  const products = await ProductDatabase.load()
  res.render('products', { products })
})

app.get('/products/:productId', async (req, res) => {
  const product = await productDatabase.find(req.params.productId)
  if (!product) return res.status(404).send('Cannot find product')
  res.render('product', { product })
})

app.listen(3000, () => {
  console.log('started listening on 3000')
})
