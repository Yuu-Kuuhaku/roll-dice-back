const conection = require('../infraestrutura/conection');
class user {
    createUser(user) {
        const sql = 'INSERT INTO Users SET ?'
        conection.query(sql, user, (erro, resp) => {
            if(erro){
                console.log(erro);
            } else {
                console.log(resp);
            }
        })
    }
}

module.exports = new user;