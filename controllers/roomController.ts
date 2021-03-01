import { Request, Response } from "express";

const Room = require('../models/room');

const bcrypt = require('bcrypt');

class RoomController {

    createRoom (req: Request, res: Response) {
        const room = req.body;
        var { password } = req.body;
        try {
            if(password.length < 6){
                res.status(400).json({error: 'senha precisa ter mais de 5 caracteres' });
            } else {
                bcrypt.hash(password, 10, (error, hash)=>{
                    if(error){
                        res.status(400).json(error);
                    }
                    // Room.createRoom({
                    //     name: user.name,
                    //     password: hash,
                    //     nick: user.nick,
                    //     createdAt: user.createdAt
                        
                    // }, res);
                })
               
            }
           
        } catch (error) {
            res.status(400).json(error);
        }
      
    }

    update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const room = req.body;
            if(id){
                Room.update(id,room,res);
            } else {
                res.status(400).json({erro: 'parametro invalido'});
            }
          
        } catch (error) {
            res.status(400).json(error);
        }
    }

    list ( req, res) {
        try {
            Room.list(res);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    getById (req, res) {
        try {
            const id = parseInt(req.params.id);
            if(id){
                Room.getById(id,res);
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
                Room.delete(id,res);
            } else {
                res.status(400).json({erro: 'parametro invalido'});
            }
          
        } catch (error) {
            res.status(400).json(error);
        }
      
    }
}

export { RoomController};
