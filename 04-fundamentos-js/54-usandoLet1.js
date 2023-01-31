/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 54 - Declarando Variáveis com let #01
*/

let numero = 1 

{
  let numero = 2
  console.log('dentro = ', numero) // imprime 2
}

console.log('fora = ', numero) // imprime 1

// Diferente da aula anterior, com var, o let
// respeita o escopo de blocos mesmo fora de uma função

// embora as variaveis tenham nomes iguais elas são 
// tratadas cada uma dentro de seu escopo 
