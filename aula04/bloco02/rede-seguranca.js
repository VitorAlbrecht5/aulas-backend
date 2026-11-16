//SLIDE 07

process.on("uncaughtException", (error) => {
  console.log("Rede pegou a Promise:", error.message);
});
process.on("unhandledRejection", (motivo) => {
  console.log("Rede pegou a Promise:", motivo.message);
});

setTimeout(() => {
  throw new Error("Erro no timer");
}, 100);

Promise.reject(new Error("Promise sem catch"));
