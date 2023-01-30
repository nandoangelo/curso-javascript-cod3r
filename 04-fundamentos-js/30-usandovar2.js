// Aula 30 - Declaração de variáveis com o var #02

// O que vai acontecer abaixo?

var numero = 1
{
  var numero = 2
  console.log('dentro = ',numero)
}
console.log('fora = ',numero)

// A variável foi sobreescrita logo o resultado exibido na tela será 2 
// para ambos os escopos. Tanto dentro quanto fora do bloco