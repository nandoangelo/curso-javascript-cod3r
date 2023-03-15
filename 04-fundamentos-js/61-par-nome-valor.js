/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 61 - Par Nome/Valor
*/

const saudacao = 'Opa' // contexto léxico 1

function exec() {
  const saudacao = 'Faaala' // contexto léxico 2
  return saudacao
}

// Note que acima temos constantes com o nome 'saudacao', 
// mas em contextos diferentes

/**
 * Objetos são coleções de pares nome/valor */
 
 const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 89.8,
  endereco: {
    logradouro: 'Rua muito legal',
    numero: 123
  }
 }

 console.log(saudacao) // 'Opa'
 console.log(exec()) // 'Faaala'
 console.log(cliente) // Exibe a coleção chave/valor