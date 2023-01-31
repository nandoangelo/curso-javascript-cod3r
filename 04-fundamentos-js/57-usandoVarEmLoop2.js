/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 57 - Usando Var em loop #02
*/


// Isso explodiu minha mente (de novo)

const funcs = [] 

for (var i = 0; i < 10; i++){
  funcs.push(function() {
    console.log(i)
  })
}

// então para cada iteração será armazenada uma funcao no 
// array, certo? Qual valor sera retornado nas chamadas...

funcs[2]() // Imprime 10
funcs[8]() // Imprime 10

// Isso mesmo. O var influencia nesse resultado também