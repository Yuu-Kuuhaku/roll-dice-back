const mysql = require('mysql');

class Conection {
    connect  =  mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            database: 'roll-dice',
    });
    
}


export { Conection };