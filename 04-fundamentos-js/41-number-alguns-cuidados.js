/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 41 - Number: Alguns cuidados
*/

console.log( 7 / 0 ) // infinity
console.log( 7 / 0.0001) // Número grande 
console.log("10" / 2) // converte em numero e traz o resultado = 5
console.log('3' + 2) // concatena = 32 (a 'string' ganha)
console.log('3' - 2) // subtrai = 1
console.log('3' - -2) // agora somou (loucura) = 5
console.log("Show" * 2) //NaN
console.log(0.1 + 0.7) // Imprecisão (0.799999999999 ao invés de 0.8)
console.log(0.1 + 0.2) // Imprecisão de novo (0.30000000000000004)
console.log((0.1 + 0.7).toFixed(1)) // Agora a gente arredonda e retorna 0.8
//console.log(10.toString()) // Erro na conversão para string
console.log((10).toString()) // assim funciona

// Prova real de que é uma String
var texto = (10).toString();
console.log(typeof(texto));

// Assim é número
var numero = 10;
console.log(typeof(numero));