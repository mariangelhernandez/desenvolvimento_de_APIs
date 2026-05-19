import express from 'express';

const app = express();
const PORT = 3000;

// Middleware para o servidor entender JSON
app.use(express.json());

// Rota inicial de teste
app.get('/', (req, res) => {
    res.send('Servidor da Locadora rodando adequadamente com ES Modules!');
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
