const Pool = require("pg").Pool;

const pool = new Pool({
  user: "tpl2021",
  host: "localhost",
  port: 5432,
  database: "uplift",
});

module.exports = pool;
