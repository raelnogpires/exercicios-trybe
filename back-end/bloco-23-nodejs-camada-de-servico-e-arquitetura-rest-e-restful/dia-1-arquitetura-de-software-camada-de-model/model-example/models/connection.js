const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'devrael',
  password: '20112021',
  database: 'model_example'
});

module.exports = connection;
