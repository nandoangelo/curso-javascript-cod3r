// Aula 33 - Usando let em Loop #01

// "Acabou o loop a acabou a vida"
for (let i = 0; i < 10; i++){
  console.log(i)
}

console.log('i = ', i) // Erro!

// Como o let respeita o escopo onde está inserido ele não será
// referenciado fora do loop