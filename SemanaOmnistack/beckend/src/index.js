//import das funcionalidades do express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
//variavel que armazena a aplicacao
const app = express();

/**
 * Informa ao app que se utiliza json no corpo das requisicoes
 * Converte o json em um objeto do js
 */
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);