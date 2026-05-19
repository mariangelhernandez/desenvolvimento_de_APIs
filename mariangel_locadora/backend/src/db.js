const { Pool } = require('pg');
require('dotenv').config();

// Configura o pool usando as variáveis de ambiente
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Tratamento obrigatório do evento de erro em clientes ociosos
pool.on('error', (err, client) => {
  console.error('Erro inesperado em cliente ocioso do PostgreSQL:', err);
  process.exit(-1);
});

module.exports = pool;