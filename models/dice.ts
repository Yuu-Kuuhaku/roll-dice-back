// import { Conection } from "../infraestrutura/conection";

// class Dice {
//     conection = new Conection();
//     createDice(dice,res) {
//         const sql = 'INSERT INTO Dices SET ?'
//         conection.query(sql, dice, (erro, resp) => {
//             if(erro){
//                 res.status(400).json(erro);
//             } else { 
//                 res.status(201).json(resp);
//             }
//         })
//     }
// }

// module.exports = new Dice;