/*
 * DESAFIO: média das turmas
 * Com a média de todos os alunos de 3 salas,
 * calcule a média geral de cada sala
 * - const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
 * - const salaJava = [6, 5, 8, 9, 5, 6]
 * - const salaPython = [7, 3.5, 8, 9.5]
 */

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(sala) {
  const somaNotas = sala.reduce((acum, nota) => acum += nota, 0);
  return somaNotas / sala.length;
}

console.log(`A média da sala Javascript é ${mediaSala(salaJS)}`);
console.log(`A média da sala Java é ${mediaSala(salaJava)}`);
console.log(`A média da sala Python é ${mediaSala(salaPython)}`);

// Usar reduce para calcular média
const notas = [10, 6.5, 8, 7.5];

const media = notas.reduce((acum, nota) => acum + nota, 0) / notas.length;
console.log(`Média: ${media}`);