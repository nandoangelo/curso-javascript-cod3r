// Aula 28 - Exemplos básicos de funções #02

// Guardando uma função em uma variável
const imprimirSoma = function (a,b) {
  console.log(a + b)
}

imprimirSoma(2,3) // Imprime 5

// Armazenando uma funcao arrow
const soma = (a, b) => {
  return a + b
}

console.log(soma(2,4)) // Imprime 6

// Retorno implícito com a função Arrow
const subtracao = (a, b) => a - b

console.log(subtracao(2,3)) // Imprime -1