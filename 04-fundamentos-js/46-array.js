/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 46 - Tipos em JavaScript: Array
*/

// Em JS arrays são mais flexíveis do que outras linguagens
// em algumas linguagens você tem o tipo de dados e tamanho limitados

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // retorna o primeiro e o último valor
console.log(valores[4]) // retorna 'undefined'

valores[4] = 10
console.log(valores) // Agora temos 10 no índice 4

// tamanho do array
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')

console.log(valores) // exibe tudo que foi inserido
console.log(valores[6])

console.log(valores.pop()) // remove último item do array
delete valores[0] // deleta item no indice 0

console.log(valores)