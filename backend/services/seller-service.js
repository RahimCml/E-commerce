const BaseService = require('./base-service');
const Seller = require('../models/seller');

class SellerService extends BaseService {
  async findByName(name) {
    return this.findBy('name', name);
  }
}

module.exports = new SellerService(Seller);
