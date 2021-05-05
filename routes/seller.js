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

module.exports = router
