/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 56 - Usando Let em loop #01
*/


// E se usarmos let declarado num laço?

for (let i = 0; i < 10; i++) {
  console.log(i)
}

console.log('i = ', i) // ERRO! Fora do escopo de "let i"