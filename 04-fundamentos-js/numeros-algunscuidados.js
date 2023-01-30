/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 41 - Number: Alguns cuidados
*/

console.log( 7 / 0 ) // infinity
console.log( 7 / 0.0001) // Número grande 
console.log("10" / 2) // converte em numero e traz o resultado
console.log("Show" * 2) //NaN
console.log(0.1 + 0.7) // Imprecisão (0.799999999999 ao invés de 0.8)
console.log((0.1 + 0.7).toFixed(1)) // Agora a gente arredonda e retorna 0.8
//console.log(10.toString()) // Erro
console.log((10).toString()) // assim funciona