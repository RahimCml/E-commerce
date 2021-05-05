const { sellerDatabase } = require('../database')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const sellers = await sellerDatabase.load()
})

module.exports = router
