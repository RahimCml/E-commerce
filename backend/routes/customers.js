const router = require('express').Router();
const customerService  = require('../services/customer-service');
const orderingService = require("../services/ordering-service");

router.get('/', async (req, res) => {
  const customers = await customerService.load();

  res.send(customers);
});

router.post('/', async (req, res, next) => {
  try {
    const customer = await customerService.insert(req.body);
    res.send(customer);
  } catch (e) {
    next(e);
  }
});

router.delete('/:customerId', async (req) => {
  await customerService.removeBy('_id', req.params.customerId);
});

router.get('/:customerId', async (req, res) => {
  const customer = await customerService.find(req.params.customerId);

  if (!customer) return res.status(404);
  res.send(customer);
});

router.post('/:customerId/orders', async (req, res) => {
  const { customerId } = req.params;
  const { productId, address, totalPrice } = req.body;

  const ordering = await orderingService.order(
    productId,
    customerId,
    address,
    totalPrice
  );

  res.send(ordering);
});

router.patch('./customerId', async (req) => {
  const { name } = req.body;

  await customerService.update({ name });
});
module.exports = router;
