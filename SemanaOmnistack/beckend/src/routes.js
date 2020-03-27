//import do express
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//variavel q desacopla o modo de rota do express nessa variavel
const routes = express.Router();

routes.post('/sessions', SessionController.create);
routes.get('/ongs', OngController.index);
/**
 * Rota e recurso = geralmente associada a entidades e grupos no banco de dados
 */
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;