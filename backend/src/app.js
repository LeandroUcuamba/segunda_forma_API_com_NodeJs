const express = require('express');
const router = require('./router'); //trazendo o router para o app utilizar;

const app = express();

app.use(express.json()); //fazer a api trabahar com json;
// toda requisicão que aconteçer na nossa aplicação vai cair no router
app.use(router); //app esta usando o router;

module.exports = app; //estamos a exportar o app para usar em outro arquivo;