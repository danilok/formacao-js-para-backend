/**
 * DESAFIO: Lista com 2 dimensões
 * Crie uma lista com os seguintes alunos e alunas:
 * - 'João', 'Juliana', 'Caio', 'Ana'
 * Crie uma lista com as seguintes médias:
 * - 10, 8, 7.5, 9
 * Crie uma lista com 2 dimensões com os nomes e as médias
 */

const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 8, 7.5, 9]

const listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(listaDeNotasEAlunos)

for (let i = 0; i < alunos.length; i++) {
  console.log(`${listaDeNotasEAlunos[0][i]} sua média é ${listaDeNotasEAlunos[1][i]}`)
}
