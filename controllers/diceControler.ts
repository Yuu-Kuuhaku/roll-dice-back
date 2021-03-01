
const Dice = require('../models/dice');

class DiceController {

    createDice (req, res) {
        const dice = req.body;
        try {
           
            // Dice.createDice({
            //     name: user.name,
            //     password: hash,
            //     nick: user.nick,
            //     createdAt: user.createdAt
                
            // }, res);
        
        } catch (error) {
            res.status(400).json(error);
        }
      
    }

    update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const dice = req.body;
            if(id){
                Dice.update(id,dice,res);
            } else {
                res.status(400).json({erro: 'parametro invalido'});
            }
          
        } catch (error) {
            res.status(400).json(error);
        }
    }

    list ( req, res) {
        try {
            Dice.list(res);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    getById (req, res) {
        try {
            const id = parseInt(req.params.id);
            if(id){
                Dice.getById(id,res);
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
                Dice.delete(id,res);
            } else {
                res.status(400).json({erro: 'parametro invalido'});
            }
          
        } catch (error) {
            res.status(400).json(error);
        }
      
    }
}

export { DiceController };