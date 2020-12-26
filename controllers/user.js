
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = app => {
    app.get('/user', (req, res) => res.send('servidor rodando'));

    app.post('/user', (req, res) => {
        const user = req.body;
        try {
            var password = await bcrypt.hash(password, 10);
            User.createUser({
                name: user.name,
                password: password,
                nick: user.nick
            });
            res.send('salvou');
    
        } catch (error) {

        }
      
    })
}