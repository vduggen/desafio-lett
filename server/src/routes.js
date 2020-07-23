const express = require("express");

const routes = express.Router();
const ProductController = require("./controllers/ProductController");

const productController = new ProductController();

routes.get("/", productController.index);
// routes.get("/product/:id", ProductController.show);

module.exports = routes;
