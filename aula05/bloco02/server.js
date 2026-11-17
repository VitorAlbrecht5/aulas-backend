// Slide 7 - dotenv: carregando o arquivo .env para dentro do Node.js
require("dotenv").config({ quiet: true });

const porta = process.env.PORT || 3000;
const nome = process.env.NOME_APP;

console.log(`${nome} rodando na porta ${porta}`);
