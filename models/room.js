const conection = require('../infraestrutura/conection');
class Room {
    createRoom(room, res) {
        const sql = 'INSERT INTO Rooms SET ?'
        conection.query(sql, room, (erro, resp) => {
            if(erro){
                res.status(400).json(erro);
            } else { 
                res.status(201).json(resp);
            }
        })
    }
}

module.exports = new Room;