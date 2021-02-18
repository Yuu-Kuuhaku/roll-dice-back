
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = app => {
    app.get('/user', (req, res) => {
        try {
            User.list(res);
        } catch (error) {
            res.status(400).json(error);
        }
      
    });
 
    app.get('/user/:id', (req, res) => {
        try {
            const id = parseInt(req.params.id);
            if(id){
                User.getById(id,res);
            } else {
                res.status(400).json({erro: 'parametro invalido'});
            }
          
        } catch (error) {
            res.status(400).json(error);
        }
      
    });

    app.patch('/user/:id', (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const user = req.body;
            if(id){
                User.update(id,user,res);
            } else {
                res.status(400).json({erro: 'parametro invalido'});
            }
          
        } catch (error) {
            res.status(400).json(error);
        }
      
    });

    app.delete('/user/:id', (req, res) => {
        try {
            const id = parseInt(req.params.id);
            if(id){
                User.delete(id,res);
            } else {
                res.status(400).json({erro: 'parametro invalido'});
            }
          
        } catch (error) {
            res.status(400).json(error);
        }
      
    });

    app.post('/user', (req, res) => {
        const user = req.body;
        var { password } = req.body;

        try {
            if(password.length < 6){
                res.status(400).json({error: 'senha precisa ter mais de 5 caracteres' });
            } else {
                bcrypt.hash(password, 10, (error, hash)=>{
                    if(error){
                        res.status(400).json(error);
                    }
                    console.log(user)
                    User.createUser({
                        name: user.name,
                        password: hash,
                        nick: user.nick,
                        createdAt: user.createdAt
                        
                    }, res);
                })
               
            }
           
        } catch (error) {
            res.status(400).json(error);
        }
      
    })
}