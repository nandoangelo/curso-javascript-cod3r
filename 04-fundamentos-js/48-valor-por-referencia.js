/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 48 - Entendendo Null e Undefined
*/

// Exemplo demonstrado na aula 48

const a = {nome: "Teste"}

console.log(a) // "Teste"

const b = a

console.log(b) // "Teste"

b.nome = 'Opa'

console.log(a) // "Opa"

// Sim. Mudou pois 'b' possui a referencia do objeto 'a'
// Isso acontece pq com objetos trabalhamos com referência
// assim como com funcoes.