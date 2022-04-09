/*
 * DESAFIO: Média
 * Calcular a média entre as seguintes notas usando o ForEach
 * - 10, 6.5, 8 e 7.5
 */

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

// arrow function
// notas.forEach((nota) => {
//   somaDasNotas += nota;
// })

// notas.forEach(function (nota) {
//   somaDasNotas += nota;
// })

// function somaNotas(nota) {
//   somaDasNotas += nota;
// }
// notas.forEach(somaNotas)

// const somaNotas = function (nota) {
//   somaDasNotas += nota;
// }
// notas.forEach(somaNotas)

// const somaNotas = (nota) => {
//   somaDasNotas += nota;
// }
// notas.forEach(somaNotas)

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);
