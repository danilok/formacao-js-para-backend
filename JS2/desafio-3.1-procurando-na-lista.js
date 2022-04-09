/*
 * DESAFIO: Procurando na lista
 * - Crie uma função que recebe como argumento o nome de um aluno
 * - Verifique se o aluno está presente na lista e retorne a média
 * final que se encontra no mesmo índice.
 * - Caso o nome do aluno não esteja na lista, retorne uma mensagem
 * indicando que o aluno não foi encontrado.
 */

const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 8, 7.5, 9]

const listaDeNotasEAlunos = [alunos, mediasDosAlunos]

function exibeAlunoNota(nomeDoAluno) {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    const indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
    return `A média do aluno{a} ${listaDeNotasEAlunos[0][indice]} é ${listaDeNotasEAlunos[1][indice]}`
  } else {
    return `Aluno ${nomeDoAluno} não está cadastrado`
  }
}

console.log(exibeAlunoNota('Ana'))
console.log(exibeAlunoNota('Juliana'))
console.log(exibeAlunoNota('Caio'))
console.log(exibeAlunoNota('Nikão'))