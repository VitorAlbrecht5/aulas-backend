const express = require('express');
const fs = require('fs');

const app = express();

if (!fs.existsSync('logs')) {
    fs.mkdirSync('logs');
}

function registrarErro(erro) {
    const data = new Date().toISOString();
    const mensagem = `[${data}] ${erro.stack || erro}\n`;

    fs.appendFileSync('logs/servidor.log', mensagem);
    console.error(mensagem);
}

app.get('/config', (req, res, next) => {
    try {
        const dados = fs.readFileSync('config.json', 'utf8');
        res.json(JSON.parse(dados));
    } catch (erro) {
        next(erro);
    }
});

app.get('/livros', (req, res, next) => {
    try {
        throw new Error('Erro ao buscar livros');
    } catch (erro) {
        next(erro);
    }
});

app.get('/relatorio', (req, res, next) => {
    Promise.reject(new Error('Erro ao gerar relatório'))
        .catch((erro) => {
            registrarErro(erro);
            res.status(200).json({
                mensagem: 'Relatório gerado com aviso'
            });
        });
});

app.use((erro, req, res, next) => {
    registrarErro(erro);

    res.status(500).json({
        mensagem: 'Erro interno do servidor'
    });
});

process.on('uncaughtException', (erro) => {
    registrarErro(erro);
    process.exit(1);
});

process.on('unhandledRejection', (motivo) => {
    registrarErro(motivo);
    process.exit(1);
});

app.listen(3000, () => {
    console.log('Servidor imortal rodando na porta 3000');
});

