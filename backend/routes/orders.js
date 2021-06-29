const router = require('express').Router();
const orderingService = require('../services/ordering-service');

router.get('/', async (req, res) => {
  const orders = await orderingService.load();

  res.render('orders', { orders });
});

router.get('/search', async (req, res) => {
  const { address } = req.query.address;
  const { totalPrice } = req.query.totalPrice;

  const query = {};

  if (address) query.address = address;
  if (totalPrice) query.totalPrice = totalPrice;

  const orders = await orderingService.query(query);

  res.render('orders', { orders });
});

module.exports = router;
