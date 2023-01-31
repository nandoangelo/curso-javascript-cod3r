/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 53 - Declarando Variáveis com var #02
*/

var numero = 1 

{
  var numero = 2
  console.log('dentro = ', numero) // imprime 2
}

console.log('fora = ', numero) // imprime 2

// Só existe escopo de bloco para o var dentro de 
// uma funcao