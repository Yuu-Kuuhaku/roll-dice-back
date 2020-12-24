const conection = require('../infraestrutura/conection');
class Room {
    createRoom(room) {
        const sql = 'INSERT INTO Rooms SET ?'
        conection.query(sql, room, (erro, resp) => {
            if(erro){
                console.log(erro);
            } else {
                console.log(resp);
            }
        })
    }
}

module.exports = new Room;