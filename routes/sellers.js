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
  if (!seller) return res.status(404).send('Cannot find seller')

  res.render('seller', { seller })
})

router.patch('./sellerId', async (req, res) => {
  const { name } = req.body

  await sellerDatabase.update({ name })
})

module.exports = router
