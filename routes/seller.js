const { sellerDatabase } = require('../database')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const sellers = await sellerDatabase.load()

  res.render('sellers', { sellers })
})

router.post('/', async (req, res) => {
  const seller = await sellerDatabase.insert(req.body)

  res.send(seller)
})

router.delete('/:sellerId', async (req, res) => {
  await sellerDatabase.removeBy('_id', req.params.sellerId)
})

router.get('/:sellerId', async (req, res) => {
  const seller = await sellerDatabase.find(req.params.sellerId)

  res.render('seller', { seller })
})

module.exports = router
