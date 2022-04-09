/*
 * DESAFIO: Filtrando por nota
 * Depois de calcular a média dos alunos, precisamos mostrar
 * quem está reprovado entre os alunos:
 * - ['Ana', 'Marcos', 'Maria', 'Mauro']
 * - [7, 4.5, 8, 7.5]
 */
const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

const alunoNotas = [alunos, notas]

const reprovados = alunos.filter((_, indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)