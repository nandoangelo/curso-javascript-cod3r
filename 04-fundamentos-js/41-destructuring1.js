// Aula 41 - Operadores: Destructuring #01
// -- Recurso novo (ES2015)

// Definindo nosso objeto
const pessoa = {
  nome: 'Ana',
  idade: 5, 
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const {nome, idade} = pessoa
// Com a notação Destructuring acima são criadas
// constantes (ou variáveis) que recebem os mesmos 
// nomes e valores dos atributos do objeto

console.log(nome, idade) // Imprime: Ana 5

const {nome:n, idade:i} = pessoa
// Agora definimos que as constantes que serão 
// criadas para receber os valores deverão ter
// outros nomes. n e i, respectivamente

console.log(n, i) // Imprime: Ana 5

// Tentando acessar atributos que não existem
const {sobrenome, bemHumorada = true} = pessoa

console.log(sobrenome, bemHumorada)
// Como não há valor padrão para sobrenome ele será 
// setado como undefined, mas já o bemHumorada receberá
// o valor padrão que definimos, desde que não haja
// um atributo com o valor definido previamente

// Acessando atributos aninhados (dentro de outro objeto)
const {endereco: {logradouro, numero, cep}} = pessoa

console.log(logradouro, numero, cep)
// Ele acessa e cria as constantes com os nomes definidos
// e ao não encontrar o cep ele é definido como undefined
