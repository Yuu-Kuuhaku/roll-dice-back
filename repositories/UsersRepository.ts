const moment = require('moment');
const conection = require('../infraestrutura/conection');

class UsersRepository {

    createUser(user) {
        const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
        const sql = 'INSERT INTO Users SET ?'
        user = {...user, createdAt}

        conection.query(sql, user, (erro, resp) => {
            if(erro){
                return erro;
            } else { 
                return resp;
            }
        })
       
    }

    list() {
        const sql = 'SELECT * FROM Users';
        conection.query(sql, (erro, resp)=> {
            if(erro){
                return erro;
            } else { 
                return resp;
            }
        })
    }

    getById(id) {
        const sql = `SELECT * FROM Users WHERE id=${id}`;
        conection.query(sql, (erro, resp)=> {
            if(erro){
                return erro;
            } else { 
                return resp;
            }
        })
    }

    update(id, user) {
        const sql = `UPDATE Users SET ? WHERE id=?`
        conection.query(sql, [user, id], (erro, resp)=> {
            if(erro){
                return erro;
            } else { 
                return resp;
            }
        })
    }
    
    delete(id){
        const sql = `DELETE FROM Users WHERE id=?`
        conection.query(sql,  id, (erro, resp)=> {
            if(erro){
                return erro;
            } else { 
                return resp;
            }
        })
    }
}


export { UsersRepository };