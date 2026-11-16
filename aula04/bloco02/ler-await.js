// SLIDE 6

const fs = require("fs/promises");

async function ler() {
  try {
    const t = await fs.readFile("dados.txt", "utf8");
    console.log(t);
  } catch (err) {
    console.log("Falhou:", err.message);
  }
  console.log("A função assincrona terminou sem derrubar o programa!");
}

ler();
