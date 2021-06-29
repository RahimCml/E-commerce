const BaseService = require('./base-service');
const Order = require('../models/order');
const productService = require('./product-service');
const customerService = require('./customer-service');

class OrderingService extends BaseService {
  async findBycustomerId(customerId) {
    return this.findBy('customer', customerId);
  }

  async findByProductId(productId) {
    return this.findBy('product', productId);
  }

  async order(productId, customerId, address, totalPrice) {
    const customer = await customerService.find(customerId);
    const product = await productService.find(productId);

    const ordering = await this.insert({
      product,
      customer,
      address,
      totalPrice,
    });
    customer.orders.push(ordering);

    await customer.save();

    return ordering;
  }
}

module.exports = new OrderingService(Order);
