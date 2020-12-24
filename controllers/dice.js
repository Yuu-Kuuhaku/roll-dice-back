
const Dice = require('../models/dice');
module.exports = app => {
    app.get('/dice', (req, res) => res.send('servidor rodando'));

    app.post('/dice', (req, res) => {
        const dice = req.body;
        Dice.createDice(dice);
        res.send('salvou');

    })
}