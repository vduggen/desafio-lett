const db = require("../database/config/db");

module.exports = {
  allProducts() {
    return db.query("SELECT name, description, price FROM products");
  },
};
