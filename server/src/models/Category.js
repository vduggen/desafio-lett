const db = require("../database/config/db");

module.exports = {
  allCategories() {
    return db.query(`SELECT * FROM categories`);
  },
};
