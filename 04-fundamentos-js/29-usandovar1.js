// Aula 29 - Declaração de variáveis com o var #01

// Escopo do var (bloco)
{
  {
    {
      {
        var sera = 'Será?'
      }
    }
  }
}

console.log(sera) // Imprime o será, mesmo ele estando fora desse escopo/bloco

function teste() {
  var local = 123
  console.log(local)
}

teste() // Imprime 123

console.log(local) // Erro! Não é possível acessar a variável dentro da função