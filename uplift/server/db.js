const Pool = require("pg").Pool;

const pool = new Pool({
    user: "tpl8_2021h1",
    host: "localhost",
    port: 4000,
    database: "A Hoy"
})

module.exports = pool;