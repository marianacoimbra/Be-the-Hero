/**estabelece conexao com o banco de dados
*/
//importacao do Kex
const knex = require('knex');
//configuracoes do bd
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;