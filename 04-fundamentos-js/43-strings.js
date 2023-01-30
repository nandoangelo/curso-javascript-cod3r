/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 43 - Strings
*/

const escola = "Cod3r" // nossa string

// charAt()
console.log(escola.charAt(4)) // retorna o caractere na posicao 4 = "r"
console.log(escola.charAt(5)) // retorna vazio pois não há posicao 5

// charCodeAt()
console.log(escola.charCodeAt(3)) // retorna o código em ASC do símbolo na posição 3

// indexOf()
console.log(escola.indexOf('d')) // retorna a posição do símbolo informado

// substring()
console.log(escola.substring(1)) // retorna uma parte da string a partir da posição 1 ("od3r")
console.log(escola.substring(0,3)) // retorna a parte da string no intervalo informado ("Cod")

// concat()
console.log('Escola '.concat(escola).concat("!")) // concatena os valores
console.log('Escola ' + escola + "!") // também funciona

// replace()
console.log(escola.replace(3, 'e')) // substitui o caractere da posicao informada

// split() - aceita regEx
console.log('Nando, Judite, Janete'.split(',')) // separa e monta um array com os dados