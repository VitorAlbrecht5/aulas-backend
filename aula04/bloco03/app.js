// SLIDE 09

const express = require("express");
const app = express();

app.get("/ola", (req, res) => {
  res.json({ mensagem: "Olá!" });
});

app.listen(3000, () =>
  console.log("Servidor rodando! Acesse http://localhost:3000/ola"),
);
