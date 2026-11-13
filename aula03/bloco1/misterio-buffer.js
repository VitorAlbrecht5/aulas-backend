// Slide 6

const fs = require('fs');

const cru = fs.readFileSync('nota.txt');
console.log('Sem utf8 (Buffer cru) ', cru);

const texto = fs.readFileSync('nota.txt', 'utf8');
console.log('Com utf8 (Texto): ', texto);
console.log('Usando .toString(): ', cru.toString('utf8'));