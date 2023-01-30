/*
* Cod3r - Udemy
* Seção 04 - Fundamentos do JavaScript
* Aula 42 - Usando Math
*/

// Vamos calcular a área de uma circunferência
const raio = 5.6;

const area = Math.PI * Math.pow(raio, 2); // é o mesmo que 3.14 * 5.6²
console.log(area); // Maior precisão

const areaSimplificada = 3.14 * (raio * raio); // mesma coisa só que menos preciso
console.log(areaSimplificada); // menor precisão

console.log(typeof Math); // Object

// Exibindo o resultado mais preciso com menos casas decimais
console.log(area.toFixed(2));
