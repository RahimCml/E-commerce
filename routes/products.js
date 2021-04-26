const { ProductDatabase, sellerDatabase } = require('../database')
const productDatabase = require('../database/product-database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const products = await ProductDatabase.load()
  res.render('products', { products })
})

router.post('/', async (req, res) => {
  const product = await productDatabase.insert(req.body)

  res.send(product)
})

router.delete('/:productId', async (req, res) => {
  await productDatabase.removeBy('id', req.params.productId)
})

router.get('/:productId', async (req, res) => {
  const product = await productDatabase.find(req.params.productId)
  if (!product) return res.status(404).send('Cannot find product')
  res.render('product', { product })
})

router.post('/:productId/seller', async (req, res) => {
  const product = await ProductDatabase.find(req.params.productId)
  const seller = await sellerDatabase.find(req.query.sellerId)

  await ProductDatabase.update(product)

  res.send(flatted.stringify(product))
})

module.exports = router
