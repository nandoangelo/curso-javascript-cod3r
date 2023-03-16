/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 48 - Entendendo Null e Undefined
*/

let valor
console.log(valor) // undefined - pois não foi inicializada

valor = null 
console.log(valor) // null
// console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco) // nao vai dar erro

console.log(produto) // {}

produto.preco = undefined // evite esse tipo de atribuicao

console.log(produto) // {preco:undefined}

// -- se quiser deletar um item use:
// delete produto.preco 
// console.log(produto.preco) // undefined