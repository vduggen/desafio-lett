const { Pool } = require("pg");

module.exports = new Pool({
  user: "postgres",
  password: "1008",
  host: "localhost",
  port: 5432,
  database: "lett_store",
});
