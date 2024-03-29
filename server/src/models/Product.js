const db = require("../database/config/db");

module.exports = {
  allProducts() {
    return db.query("SELECT * FROM products");
  },
  find(id) {
    return db.query("SELECT * FROM products WHERE id = $1", [id]);
  },
};
