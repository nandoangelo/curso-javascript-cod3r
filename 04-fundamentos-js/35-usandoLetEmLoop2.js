// Aula 35 - Usando let em Loop #02

const funcs = []

for (let i = 0; i < 10; i++){
  funcs.push(
    function () {
      console.log(i)
    }
  )
}

// Com o uso do let a função terá a "memória" de quando foi 
// definida, exibindo o valor correto ao ser chamada

funcs[2]() // Imprime 2
funcs[4]() // Imprime 4
funcs[6]() // Imprime 6
