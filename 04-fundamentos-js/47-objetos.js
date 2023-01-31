/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 47 - Tipos em JavaScript: Objecs
*/
const prod1 = {} // criamos um objeto vazio

// definindo atributos dinamicamente
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // JS aceita atributos com espaço, mas melhor evitar

console.log(prod1)

// Forma literal para criar objetos

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90
}

console.log(prod2)

// É possível criar objetos aninhados
// objetos dentro de objetos, afinal, são conjutos

const prod3 = {
  nome: 'Aninhado',
  preco: 1.90,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}

console.log(prod3)

// JSON não é a mesma coisa que um objeto. 
// JSON é um formato textual
// Exemplo de JSON:
// {"nome": "Camiseta Polo", "preco": 79.9}