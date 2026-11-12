function formatLog(msg) {
  const data = new Date().toLocaleString("pt-BR");

  return `[${data}] - ${msg}`;
}

module.exports = { formatLog };
