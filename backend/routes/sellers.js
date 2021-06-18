const router = require('express').Router();
const sellerService = require('../services/seller-service');

router.get('/', async (req, res) => {
  const sellers = await sellerService.load();

  res.send(sellers);
});

router.post('/', async (req, res) => {
  const seller = await sellerService.insert(req.body);

  res.send(seller);
});

router.delete('/:sellerId', async (req) => {
  await sellerService.removeBy('_id', req.params.sellerId);
});

router.get('/:sellerId', async (req, res) => {
  const seller = await sellerService.find(req.params.sellerId);
  if (!seller) return res.status(404);
  res.send(seller);
});

router.patch('./sellerId', async (req) => {
  const { name } = req.body;

  await sellerService.update({ name });
});

module.exports = router;
