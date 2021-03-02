import { Conection } from "./infraestrutura/conection";
import { Tables } from "./infraestrutura/tables";
import { CustomExpress } from "./config/customExpress";

const tables = new Tables();
const conection = Conection().then(data => {
    console.log(data);
    console.log('conectado com sucesso');
    tables.init(data);
    const app = CustomExpress();
    app.listen(3000, () => console.log('rodando'));
}).catch(error => {
console.log(error)
});
