// SLIDE 10

const express = require("express");
const fs = require("fs");
const app = express();

app.get('/config', (req, res, next) => {
    try {
        const texto = fs.readFileSync('config.txt', 'utf8');
        res.json(JSON.parse(texto));
    } catch (err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    console.error('ERRO:', err.message);
    res.status(500).json({ mensagem: 'Erro interno' });
});


app.listen(3000, () => 
console.log('Na porta 3000 -> Teste http://localhost:3000/config')
);