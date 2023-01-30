// Aula 31 - Declaração de variáveis com o let

// O que vai acontecer abaixo?

var numero = 1
{
  let numero = 2
  console.log('dentro = ',numero)
}
console.log('fora = ',numero)

// O let respeita o escopo do bloco, logo não irá interferir na 
// variavel numero definida anteriormente