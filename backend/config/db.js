const config = require('../knexfile');
const knex = require('knex')(config)

// Executa a migração ao iniciar o backend
knex.migrate.latest([config]);

module.exports = knex;
