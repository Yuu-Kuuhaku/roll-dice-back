
const Room = require('../models/room');
module.exports = app => {
    app.get('/room', (req, res) => res.send('servidor rodando'));

    app.post('/room', (req, res) => {
        const room = req.body;
        Room.createRoom(room, res);
       

    })
}