// Slide 8

require("dotenv").config({ quiet: true });

const senha = process.env.DB_PASSWORD;
const chave = process.env.API_KEY;
const naoExiste = process.env.VARIAVEL_INVENTADA;
console.log("Leitura direta -> Senha:", senha, "| Não Existe:", naoExiste);

const porta = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";
console.log("Com valor padrão (||) -> Ambiente:", env);

console.log("Errado (texto + 1): ", process.env.PORT + 1);
console.log("Certo (Number + 1):", Number(process.env.PORT) + 1);



// TESTE NO TERMINAL
// node valores-padrao.js