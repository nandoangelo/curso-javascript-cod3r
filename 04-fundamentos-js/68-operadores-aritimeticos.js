/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 68 - Operadores: Aritméticos
*/

// Vamos treinar alguns dos operadores aritméticos

// Atribuindo com o destructuring...
const [a, b, c, d] = [3, 5, 1, 15]

// ...é o mesmo que
// const a = 3
// const b = 5
// const c = 1
// const d = 15
// ... ou ...
// const a = 3, b = 5, c = 1, d = 15

// Operadores
const soma = a + b + c + d // 3 + 5 + 1 + 15 = 24
const subtracao = d - b // 15 - 5 = 10
const multiplicacao = a * b // 3 * 5 = 15
const divisao = d / a // 15 / 3 = 5
const modulo = a % 2 // 3 % 2 = 1 (resto da divisao)

// Conferindo os resultados dos cálculos
console.log(soma) // imprime 24
console.log(subtracao) // imprime 10
console.log(multiplicacao) // imprime 15
console.log(divisao) // imprime 5
console.log(modulo) // imprime 1 (resto da divisao)