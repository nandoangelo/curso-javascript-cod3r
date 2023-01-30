// Aula 27

// Função sem retorno
function imprimirSoma(a,b) {
  console.log(a + b)
}

imprimirSoma(2,3) // imprime 5
imprimirSoma(2) // imprime NaN (b = undefined)
imprimirSoma() // imprime NaN (a e b são undefined)
imprimirSoma(2,10,4,5,6) // imprime 12 os outros valores são ignorados

// Função com retorno
function retornaSoma(a, b = 0) {
  return a + b
}

console.log(retornaSoma(2,3)) // Imprime 5
console.log(retornaSoma(2)) // Imprime 2 (b tem valor padrão igual a 0)
console.log(retornaSoma()) // Imprime NaN pois o valor de a será undefined
console.log(retornaSoma(2,10,14,16)) // Imprime 12 (2+10), os outros valores são ignorados