const { productService, sellerService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const products = await productService.load()

  res.send(products)
})

router.post('/', async (req, res, next) => {
  try {
    const product = await productService.insert(req.body)
    res.send(product)
  } catch (e) {
    next(e)
  }
})

router.delete('/:productId', async (req, res) => {
  await productService.removeBy('_id', req.params.productId)
})

router.get('/:productId', async (req, res) => {
  const product = await productService.find(req.params.productId)
  if (!product) return res.status(404)
  res.send(product)
})

router.patch('./productId', async (req, res) => {
  const { name } = req.body

  await productService.update({ name })
})
module.exports = router
