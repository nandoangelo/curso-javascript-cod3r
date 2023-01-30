// Aula 46 - Operadores: Relacionais

console.log('01)', '1' == 1) // compara o valor. Resultado: true
console.log('02)', '1' === 1) // compara o valor e tipo. Resultado: false
console.log('03)', '3' != 3) // false
console.log('04)', '3' !== 3) // true

// Os clássicos
console.log('05)', 3 < 2) // false
console.log('06)', 3 > 2) // true
console.log('07)', 3 <= 2) // false
console.log('08)', 3 >=2 ) // true

// Referências
const d1 = new Date(0)
const d2 = new Date(0)

// Técnicamente são iguais
// ambos referenciam a "data 0" ou 1970-01-01
console.log(d1)
console.log(d2)

// mas...

console.log('09)', d1 === d2 ) // false
console.log('10)', d1 == d2 ) // false

// ... pois comparam os endereços de memória
// por outro lado se fizermos assim...

console.log('11)', d1.getTime === d2.getTime ) // true

// Null e Undefined são iguais?
console.log('12)', undefined == null ) // true
console.log('13)', undefined === null ) // false