/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 44 - Usando template Strings
*/

const nome = 'Rebeca'

const concatenacaoTradicional = 'Olá, ' + nome + '!'
const templateString = `Olá, ${nome}!`

// Ambos exibem o mesmo resultado
console.log(concatenacaoTradicional); // mais "quebrado"
console.log(templateString) // mais "natural"

// suporte a expressões
console.log(`1 + 1 = ${1 + 1}`)

// suporte a chamada de funções
const up = texto => texto.toUpperCase() // função arrow

console.log(`ei... ${up('cuidado')}!`)