const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.HOSTNAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DATABASE_NAME,
});

module.exports = connection;
