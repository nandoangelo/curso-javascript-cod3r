/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 66 - Operadores: Destructuring #3
*/

// Usando o Destructuring com função

function rand({min = 0, max = 1000}) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

/* A função acima se beneficia do destructuring
 * definindo um valor padrao para os parametros
 * e permitindo novas possibilidades para chamar
 * a função
 */

// Objeto e parametros definidos
const obj = {max: 50, min: 40}
console.log(rand(obj)) // Retorna número aleatório entre 40 e 50

console.log(rand({min: 955})) // Retorna número aleatório entre 955 e 1000

console.log(rand({})) // Retorna número aleatório entre 0 e 1000

console.log(rand()) // erro