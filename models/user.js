const moment = require('moment');
const conection = require('../infraestrutura/conection');
class user {
    createUser(user, res) {
        const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
        const sql = 'INSERT INTO Users SET ?'
        user = {...user, createdAt}

        conection.query(sql, user, (erro, resp) => {
            if(erro){
                res.status(400).json(erro);
            } else { 
                res.status(201).json(user);
            }
        })
       
    }

    list(res) {
        const sql = 'SELECT * FROM Users';
        conection.query(sql, (erro, resp)=> {
            if(erro){
                res.status(400).json(erro);
            } else { 
                res.status(200).json(resp);
            }
        })
    }

    getById(id, res) {
        const sql = `SELECT * FROM Users WHERE id=${id}`;
        conection.query(sql, (erro, resp)=> {
            if(erro){
                res.status(400).json(erro);
            } else if(resp.length == 0){
                res.status(422).json({message: 'Registro não encontrado'})
            }
            else { 
                res.status(200).json(resp[0]);
            }
        })
    }

    update(id, user, res) {
        const sql = `UPDATE Users SET ? WHERE id=?`
        conection.query(sql, [user, id], (erro, resp)=> {
            if(erro){
                res.status(400).json(erro)
            }else {
                res.status(200).json({...user, id})
            }
        })
    }
    
    delete(id, res){
        const sql = `DELETE FROM Users WHERE id=?`
        conection.query(sql,  id, (erro, resp)=> {
          
            if(erro){
                res.status(400).json(erro)
            }else if(resp.affectedRows == 0){
                res.status(400).json({message: 'Registro não encontrado'})
            }
            else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new user;