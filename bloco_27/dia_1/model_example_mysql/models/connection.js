// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'henriquebelias',
    password: 'hEn+290193',
    database: 'model_example'});

module.exports = connection;
