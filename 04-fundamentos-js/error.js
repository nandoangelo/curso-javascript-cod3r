// armazena numero sorteado entre 0 e 1000
const numeroSecreto = Math.floor(Math.random() * 100)

let palpite = prompt('Pensei em um número entre 0 e 100. Quer arriscar um palpite de qual ele é?')

palpite = Number(palpite)

for (let i = 0; i < 3; i++)
{
  if (palpite == numeroSecreto) {
    console.log('VOCÊ ACERTOU!!')
    break
  }
  else if (palpite > numeroSecreto) {
    console.log('Você chutou alto. Seu palpite é maior do que o número que pensei')
    palpite = prompt('Tente novamente')
  }
  else {
    console.log('Você chutou baixo. Seu palpite é menor do que o número que pensei')
  }
  console.log(`Essa foi sua ${i+1}ª tentativa.`)
}

console.log(`O numero sorteado foi: ${numeroSecreto}`)