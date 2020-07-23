const Product = require("../models/Product");

module.exports = class ProductController {
  async index(req, res) {
    const products = await Product.allProducts();

    return res.json(products.rows);
  }

  async show(req, res) {
    const { id } = req.params;
    const product = await Product.find(id);

    return res.json(product.rows[0]);
  }
};
