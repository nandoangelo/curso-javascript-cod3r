/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 59 - Entendendo o Hoisting (içamento)
*/


console.log('a = ', a) // a = undefined
var a = 2
console.log('a = ', a) // a = 2

/**
 * EXPLICANDO: 
 * O interpretador consegue içar a variável declarada
 * para o topo e depois, mais abaixo, que vai atribuir
 * valor a ela.
 * 
 * Com o 'let' esse efeito de içamento não ocorre e o 
 * programa retorna um erro: "Cannot access 'a' before
 * initialization"
 */