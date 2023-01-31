/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 52 - Declarando Variáveis com var #01
*/

// Escopo = Alcance ou Onde está disponível/visível

{
  {
    {
      {
        var sera = 'Será?!?!'
        console.log(sera) // imprime 'Será?!?!'
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