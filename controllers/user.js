
const User = require('../models/user');
module.exports = app => {
    app.get('/user', (req, res) => res.send('servidor rodando'));

    app.post('/user', (req, res) => {
        const user = req.body;
        User.createUser(user);
        res.send('salvou');

    })
}