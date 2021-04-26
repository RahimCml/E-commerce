const { ProductDatabase, sellerDatabase } = require('../database')
const productDatabase = require('../database/product-database')
const flatted = require('flatted')

app.get('/products', async (req, res) => {
  const products = await ProductDatabase.load()
  res.render('products', { products })
})

app.post('/products', async (req, res) => {
  const product = await productDatabase.insert(req.body)
  res.send(product)
})

app.delete('/products/:productId', async (req, res) => {
  await productDatabase.removeBy('id', req.params.productId)
})

app.get('/products/:productId', async (req, res) => {
  const product = await productDatabase.find(req.params.productId)
  if (!product) return res.status(404).send('Cannot find product')
  res.render('product', { product })
})

app.post('/products/:productId/seller', async (req, res) => {
  const product = await ProductDatabase.find(req.params.productId)
  const seller = await sellerDatabase.find(req.query.sellerId)

  await ProductDatabase.update(product)

  res.send(flatted.stringify(product))
})
