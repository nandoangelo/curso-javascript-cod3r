/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 51 - Exemplos básicos de funções #02
*/

// Armazenando uma funcao numa variavel
// -- um dos recursos do JS

const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

/* Funções arrow => (ECMAScript 2015) */

// Armazenando uma funcao "arrow" numa variavel
const soma = (a, b) => {
  return a + b
}

console.log(soma(2, 3)) // 5

// retorno implícito
const subtracao = (a , b) => a - b

console.log(subtracao(7, 5)) // 2

// outro exemplo com menos parametros (sem parenteses)
const saudacao = nome => `Olá, ${nome}!`

console.log(saudacao('Fernando')) // 'Olá, Fernando!'