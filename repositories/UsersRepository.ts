import { Conection } from "../infraestrutura/conection";

const moment = require('moment');


class UsersRepository {
    private conected ;
    
    async createUser(user) {
        const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
        const sql = 'INSERT INTO Users SET ?'
        user = {...user, createdAt}
        const data = await Conection();
      
        let teste = data.query(sql, user, (error, results, fields) => {
            
            if(error){
                return error;
            } else { 
                return fields;
            }
        });
        return teste;
      
    }

    list() {
        const sql = 'SELECT * FROM Users';
        this.conected.query(sql, (erro, resp)=> {
            if(erro){
                return erro;
            } else { 
                return resp;
            }
        })
    }

    getById(id) {
        const sql = `SELECT * FROM Users WHERE id=${id}`;
        this.conected.query(sql, (erro, resp)=> {
            if(erro){
                return erro;
            } else { 
                return resp;
            }
        })
    }

    update(id, user) {
        const sql = `UPDATE Users SET ? WHERE id=?`
        this.conected.query(sql, [user, id], (erro, resp)=> {
            if(erro){
                return erro;
            } else { 
                return resp;
            }
        })
    }
    
    delete(id){
        const sql = `DELETE FROM Users WHERE id=?`
        this.conected.query(sql,  id, (erro, resp)=> {
            if(erro){
                return erro;
            } else { 
                return resp;
            }
        })
    }
}


export { UsersRepository };