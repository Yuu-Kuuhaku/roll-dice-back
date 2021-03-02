
class Tables {
    
    private conection;

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

        const sql2 ='CREATE TABLE IF NOT EXISTS rooms (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, password varchar(20), isPassword boolean NOT NULL, quantityOfUsers int NOT NULL, PRIMARY KEY (id))'
        this.conection.query(sql2, (erro)=>{
            if(erro){
                console.log(erro);
            } else {
                console.log('tabela de Salas criada');
            }
        });
        const sql3 = 'CREATE TABLE IF NOT EXISTS dices (id int NOT NULL AUTO_INCREMENT, quantityOfFaces int NOT NULL, PRIMARY KEY (id))';
        this.conection.query(sql3, (erro)=>{
            if(erro){
                console.log(erro);
            } else {
                console.log('tabela de Dados criada');
            }

        });
    }
}

export { Tables };