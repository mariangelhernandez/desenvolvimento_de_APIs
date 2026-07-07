import express from 'express';
export const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (req, res) => {
    //Endpoint para conferir se a API está funcionando.
    // comortamento esperado: receber status 200 
    // com a mesagem "pong" no corpo da resposta.

    console.log(`Porta: ${PORT}`);
    console.log('Alguém acessou o endpoint /Ping!');
    res.status(200).send('Hello, Woerld! Pong!');

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse http://localhost:${PORT}/ping para testar o endpoint /ping`);
});


