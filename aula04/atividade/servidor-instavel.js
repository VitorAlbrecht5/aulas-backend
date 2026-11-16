const express = require('express');
const fs = require('fs');

const app = express();

// Rota de configuração
app.get('/config', (req, res) => {
    const dados = fs.readFileSync('config.json', 'utf8');
    res.json(JSON.parse(dados));
});

// Rota de livros
app.get('/livros', (req, res) => {
    throw new Error('Erro ao buscar livros');
});

// Rota de relatório
app.get('/relatorio', (req, res) => {
    Promise.reject(new Error('Erro ao gerar relatório'));

    res.json({ mensagem: 'Relatório gerado!' });
});

app.listen(3000, () => {
    console.log('Servidor instável rodando na porta 3000');
});
