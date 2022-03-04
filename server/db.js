const Pool = require("pg").Pool;

const pool = new Pool({
    user: "adoss",
    password: process.env.DBPW,
    host: "localhost",
    port: 5433,
    database: "adoss"
});

module.exports = pool;