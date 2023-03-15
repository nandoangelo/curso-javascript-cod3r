/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 64 - Operadores: Destructuring #1
*/

// Operador de 'Desestruturação'
// Ele 'apanha' atributos de uma estrutura
// -- Recurso novo do ECMASCRIPT (2015)

// Objeto de exemplo:
const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

// E se eu quiser pegar nome e idade e salvar em duas
// novas variaveis?

// -- Forma tradicional:

// const nome = pessoa.nome
// const idade = pessoa.idade

// console.log (nome, idade) // Imprime: 'Ana' 5

// -- Usando o Destructuring:

const {nome, idade} = pessoa 
// Com a notação Destructuring acima são criadas
// constantes (ou variáveis) que recebem os valores
// dos atributos de mesmo nome

console.log(nome, idade) // Imprime: 'Ana' 5

// E se eu quisesse que as novas variaveis
// tivessem novos nomes?
// Veja:

const {nome:n, idade:i} = pessoa
// ou seja, pegamos os valores dos atributos e 
// conferimos eles a duas novas constantes de nome 'n' e 'i'

console.log (n, i) // Imprime: 'Ana' 5


// E se a variavel não existir? 
// Podemos definir valores padroes de retorno

const {sobrenome, bemHumorada = true} = pessoa // não existem no objeto
console.log(sobrenome, bemHumorada) // undefined true
console.log(pessoa) // objeto continua inalterado

// Destructuring de um objeto dentro do objeto
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep) // imprime: 'Rua ABC' 1000 undefined

// Mas se o objeto não existe, então teremos um erro:
const {conta: {ag, num}} = pessoa
console.log(ag, num) // vai exibir um erro no console
