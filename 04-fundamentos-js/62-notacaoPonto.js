/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 62 - Notação Ponto '.'
*/

// O ponto é usado como um assessor de propriedade
// no JavaScript. Com ele é possível acessar funções
// e outras propriedades de um objeto, por exemplo...


// Usamos os pontos aqui para acessar as funções dos 
// objetos 'console' e 'Math'. 
console.log(Math.ceil(6.8)) // retorna '7'

const obj1 = {} // criamos um objeto
obj1.nome = 'Bola' // com a notação de ponto criamos a
// propriedade 'nome' e definimos um valor para ela

// o mesmo que foi mostrado acima também poderia ser feito
// da seguinte forma:
// obj1['nome'] = 'Bola' // assessor de propriedade com colchetes

console.log(obj1.nome) // 'Bola'

// podemos usar '.' para criar propriedades
// como no exemplo abaixo, onde a função 'Obj()'
// funciona como classe
function Obj(nome) {
  this.nome = nome
  this.exec = function () {
    console.log('Exec...')
  }
}

const obj2 = new Obj('cadeira') // cria obj2.nome = 'cadeira'
const obj3 = new Obj('mesa') // // cria obj3.nome = 'mesa'

console.log(obj2.nome) // 'cadeira'
console.log(obj3.nome) // 'mesa'

// Acessa a funcao exec() em obj2
obj2.exec() // 'Exec...'
obj1.exec() // retorna erro, pois funcao nao foi criada
// neste objeto