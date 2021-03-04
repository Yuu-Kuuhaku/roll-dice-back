import { UsersRepository } from '../repositories/UsersRepository';

const User = require('../models/user');
const bcrypt = require('bcrypt');

class UserController {

    createUser (req, res) {
        const {name , nick, password, createdAt} = req.body;

        try {

            const usersRepository = new UsersRepository();

            if(password.length < 6){
                res.status(400).json({error: 'senha precisa ter mais de 5 caracteres' });
            } else {
                bcrypt.hash(password, 10, async (error, hash)=>{
                    if(error){
                        res.status(400).json(error);
                    }

                    const user = await usersRepository.createUser({
                        name,
                        password: hash,
                        nick,
                        createdAt
                    });
                    console.log(user);
                    console.log(user);
               })
               
            }
           
        } catch (error) {
            res.status(400).json(error);
        }
      
    }

    update(req, res) {
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
    }

    list ( req, res) {
        try {
            User.list(res);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    getById (req, res) {
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
    }

    delete (req, res) {
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
      
    }
}

export { UserController };