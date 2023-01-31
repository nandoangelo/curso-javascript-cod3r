/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 50 - Exemplos básicos de funções #01
*/

// Uma função é um verbo. Uma ação.

// Função sem retorno ----

function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2,3) // 5 (2 + 3)
imprimirSoma(2) // NaN (tenta somar 2 + undefined)
imprimirSoma(2,3,5,8,10,7) // 5 (ignora os outros parametros)
imprimirSoma() // NaN (undefined + undefined)

// Função com retorno ----

function soma(a, b = 0) { // valor padrao atribuido a "b"
  return a + b
}

console.log(soma(2,3)) // 5 (2 + 3)
console.log(soma(2)) // 2 (2 + 0)
console.log(soma()) // NaN (undefined + 0)