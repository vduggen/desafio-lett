const Product = require("../models/Product");
const Category = require("../models/Category");

module.exports = class ProductController {
  async index(req, res) {
    const categories = await Category.allCategories();
    const products = await Product.allProducts();

    return res.json({ products: products.rows, categories: categories.rows });
  }

  async show(req, res) {
    const { id } = req.params;
    const product = await Product.find(id);

    return res.json(product.rows[0]);
  }
};
