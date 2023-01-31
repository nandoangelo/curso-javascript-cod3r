/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 58 - Usando Let em loop #02
*/


const funcs = [] 

for (let i = 0; i < 10; i++){
  funcs.push(function() {
    console.log(i)
  })
}

// então para cada iteração será armazenada uma funcao no 
// array, certo? Qual valor sera retornado nas chamadas...

funcs[2]() // Imprime 2
funcs[8]() // Imprime 8

// Agora sim deu certo, pois o let respeita o escopo do laço de repeticao