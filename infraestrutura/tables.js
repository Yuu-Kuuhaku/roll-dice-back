class Tables {
    init(conection) {
        this.conection = conection;
        this.createUsers();
    }

    createUsers(){
        const sql = 'CREATE TABLE IF NOT EXISTS Users (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, creatAt  datetime NOT NULL, password varchar(20) NOT NULL, nick varchar(20) NOT NULL, PRIMARY KEY (id))';
        this.conection.query(sql, (erro)=>{
            if(erro){
                console.log(erro);
            } else {
                console.log('tabela de usuarios criada');
            }

        });
    }
}

module.exports = new Tables;