const express = require('express');
const filmesRoutes = require('./routes/filmes.route');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para permitir ler requisições com formato JSON
app.use(express.json());

// Acopla as rotas sob o prefixo /filmes
app.use('/filmes', filmesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});