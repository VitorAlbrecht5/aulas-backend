import { somar, dobrar } from "./calculadora.js";
import saudar from "./saudacao.js";

const r = somar(2, 3);
console.log(`Soma: ${r}`);
console.log(`Dobro: ${dobrar(10)}`);
console.log(saudar("Vitor"));