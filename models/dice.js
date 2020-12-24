const conection = require('../infraestrutura/conection');
class Dice {
    createDice(dice) {
        const sql = 'INSERT INTO Dices SET ?'
        conection.query(sql, dice, (erro, resp) => {
            if(erro){
                console.log(erro);
            } else {
                console.log(resp);
            }
        })
    }
}

module.exports = new Dice;