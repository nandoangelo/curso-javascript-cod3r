/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 67 - Operadores: Destructuring #4
*/

// Usando o Destructuring com função (usando array)
// Parecido com o exemplo anterior (aula 66) mas
// usando array ao inves de objeto

function rand([min = 0, max = 1000]) {
  if(min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}
/**
 * Na função acima inserimos um teste que inverte
 * os valores caso o 'min' seja maior que o 'max'
 * assim a ordem dos fatores fica ajustada
 */

console.log(rand([50, 40])) // retorna um número entre 40 e 50
console.log(rand([922])) // retorna um número entre 922 e 1000 (pulou a definicao de max)
console.log(rand([, 10])) // retorna um número entre 0 e 10 (pulou a definicão de min)
console.log(rand([])) // retorna um número entre 0 e 1000
console.log(rand([1002])) // ele recebe no "min" e inverte no teste.

//console.log(rand()) // erro