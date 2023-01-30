// Aula 34 - Usando Var em Loop #02

const funcs = []

// Aqui temos um laço que irá preencher o array com funções que 
// imprimem 'i' no momento em quem foram geradas (ou pelo menos deveriam)
for (var i = 0; i < 10; i++){
  funcs.push(
    function () {
      console.log(i)
    }
  )
}

funcs[2]() // Imprime 10
funcs[4]() // Imprime 10

// Como o var não respeita o escopo ele irá causar um resultado bem
// esquisito nessas funções já que ambas irão referenciar o valor de i como 10