const mysql = require('mysql');

const conection  = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'roll-dice',
});

module.exports = conection;