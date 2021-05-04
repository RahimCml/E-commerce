const { productDatabase, sellerDatabase } = require('../database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const products = await productDatabase.load()

  res.render('products', { products })
})

router.post('/', async (req, res) => {
  const product = await productDatabase.insert(req.body)

  res.send(product)
})

router.delete('/:productId', async (req, res) => {
  await productDatabase.removeBy('_id', req.params.productId)
})

router.get('/:productId', async (req, res) => {
  const product = await productDatabase.find(req.params.productId)
  if (!product) return res.status(404).send('Cannot find product')
  res.render('product', { product })
})

router.post('/:productId/seller', async (req, res) => {
  const { productId } = req.params
  const { sellerId } = req.body

  const product = await ProductDatabase.find(productId)
  const seller = await sellerDatabase.find(sellerId)

  // product.info(this)

  await productDatabase.update(product)

  res.send(flatted.stringify(product))
})

router.patch('./productId', async (req, res) => {
  const { name } = req.body

  await productDatabase.update({ name })
})
module.exports = router
