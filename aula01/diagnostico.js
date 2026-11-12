// VITOR
const os = require("os");
const gb = os.totalmem() / 1024 ** 3;

console.table({
  sistema: os.platform(),
  cpus: os.cpus().length,
  ramGB: gb.toFixed(1),
  usuario: os.userInfo().username,
});

// Responda: por que esse código não roda no navegador?
// R: Porque esse código foi feito para rodar no Node.js e não diretamente no navegador. O Node.js permite executar JavaScript fora do navegador
