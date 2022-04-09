/*
 * DESAFIO: Ponto Extra
 * Um aluno recebeu um ponto extra nas suas notas,
 * adicione esse ponto em suas notas
 * - 10, 9, 8, 7, 6
 */

const notas = [10, 9, 8, 7, 6, 9.5];

const notasPontoExtra = notas.map(nota => nota + 1 >= 10 ? 10 : ++nota);

console.log(notasPontoExtra);
