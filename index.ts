import { Conection } from "./infraestrutura/conection";

const customExpress = require('./config/customExpress');
const Tables =  require('./infraestrutura/tables');

const conection = new Conection();
conection.connect( (erro)=>{
    if(erro){
        console.log(erro);
    } else {
        console.log('conectado com sucesso');
        Tables.init(conection);
        const app = customExpress();
        app.listen(3000, () => console.log('rodando'));

    }
})
