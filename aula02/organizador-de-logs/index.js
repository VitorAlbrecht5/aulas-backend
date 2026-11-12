const { formatLog } = require('./utils');
const fs = require('fs');
const path = require('path');

const caminhoLogs = path.join(__dirname, 'logs');

if (!fs.existsSync(caminhoLogs)) {
    fs.mkdirSync(caminhoLogs);
}

const caminhoArquivo = path.join(caminhoLogs, 'system.log');

const mensagem = formatLog('Sistema iniciado');

fs.appendFileSync(caminhoArquivo, mensagem + '\n');

console.log('Log registrado com sucesso!');
