/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 45 - Tipos em JavaScript: Booleano
*/

let isAtivo = false
console.log(isAtivo) // false

isAtivo = true
console.log(isAtivo) // true

isAtivo = 1
console.log(!!isAtivo) // se comporta como 'true'

console.log('os verdadeiros...')
console.log(!!3) // true
console.log(!!-1) // true
console.log(!!' ') // true
console.log(!!'texto') // true
console.log(!![]) // true
console.log(!!{}) // true
console.log(!!Infinity) // true
console.log(!!(isAtivo = true)) // true (testa o valor recebido)

console.log('os falsos...')
console.log(!!0) // false
console.log(!!'') // false (string vazia)
console.log(!!null) // false
console.log(!!NaN) // false
console.log(!!undefined) // false
console.log(!!(isAtivo = false)) // false

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' ')) // true (porque possui pelo menos um verdadeiro)

// no exemplo acima ele retorna o primeiro valor verdadeiro encontrado, logo...
let nome = ''
console.log(nome || 'Desconhecido') // se não houver nome digitado, retorna 'Desonhecido'