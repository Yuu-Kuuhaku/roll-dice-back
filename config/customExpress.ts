const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const { router } = require('../routes');

const CustomExpress = ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(router);
    consign().include('controllers').into(app);
    
    return app
}
 export { CustomExpress };