const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'devrael',
  password: '20112021',
  database: 'rest_exercicios'});

module.exports = connection;