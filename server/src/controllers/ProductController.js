const Product = require("../models/Product");

module.exports = class ProductController {
  async index(req, res) {
    const products = await Product.allProducts();

    return res.json(products.rows);
  }
};
