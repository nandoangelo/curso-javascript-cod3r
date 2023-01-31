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


// link e-book (Dropbox)
// https://www.dropbox.com/s/hi9gxfmlqq5ztnk/Ebook%20-%20Urg%C3%AAncia%20e%20emerg%C3%AAncia%20cl%C3%ADnico-cir%C3%BArgica%20odontol%C3%B3gica%20na%20aten%C3%A7%C3%A3o%20prim%C3%A1ria%20-%202022%20%285%29%5B1%5D.pdf?dl=0
// link curto: https://bit.ly/ebook202302
// outro link curto: https://bit.ly/ebook-urgencia-e-emergencia-2022