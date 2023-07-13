const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sql-test',
    password: '7193'
});

module.exports = pool.promise();