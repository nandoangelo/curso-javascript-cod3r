// Aula 44 - Operadores: Destructuring #04

function rand([ min = 0, max = 1000 ]) {
  // caso o valor min seja maior que o máximo...
  if (min > max) [min, max] = [max, min] // ... inverta as variáveis com o destructuring
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

// Hora do teste

console.log(rand([50,40])) // Recebe os valores e inverte
console.log(rand([992])) // Assume o valor como min e usa o valor padrao para o max
console.log(rand([])) // Assume os valores padrões
console.log(rand([, 10])) // O min assume o padrão e o max recebe o valor passado