/**
 * DESAFIO: Atualizando elementos
 * Crie uma lista de chamada com os seguintes alunos
 * - 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'
 * Porém, a Ana e o Caio mudaram de escola e o Rodrigo
 * entrou nesta sala. Atualize a lista.
 */

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

console.log(`Turma original: ${listaDeChamada}`)
listaDeChamada.splice(1, 2, 'Rodrigo') // altera o array original
console.log(`Turma alterada: ${listaDeChamada}`)
