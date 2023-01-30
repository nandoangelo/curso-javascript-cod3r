// Aula 43 - Operadores: Destructuring #03
// Usando funções

// Notação de objeto dentro da função rand()
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

// Criando o objeto com os atributos
const obj = { max: 50, min: 40 }

// Chamando a função com o nosso objeto acima
console.log(rand(obj))

// Chamando a função com um objeto criado na hora
// referenciando o atributo min enquanto que o 
// max já possui o valor padrão definido de 1000
console.log(rand({ min: 955}))