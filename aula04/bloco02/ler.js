// SLIDE 05

const fs = require('fs');

try {
    const texto = fs.readFileSync('nao-existe.txt', 'utf-8');
    console.log(texto);
} catch (err) {
    console.log('Não consegui ler:', err.message);
}

console.log('O programa continua!')
