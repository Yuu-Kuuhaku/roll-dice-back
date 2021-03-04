import * as mysql from 'mysql';


    const Conection = async () => {
        try{
            return await mysql.createConnection({
                host: 'localhost',
                port: 3306,
                user: 'root',
                database: 'roll-dice',
            });
        } catch (err){
            return err;
        }
       
    }
    
export { Conection };