require("dotenv").config({ quiet: true });

const obrigatorias = ["API_KEY", "PORT", "NOME_APP"];

for (const nome of obrigatorias) {
  if (!process.env[nome]) {
    console.error(`Falta ${nome} no .env`);
    process.exit(1);
  }
}

module.exports = {
  porta: Number(process.env.PORT),
  nomeApp: process.env.NOME_APP || "Sistema",
  apiKey: process.env.API_KEY,
};
