/**
 * DESAFIO: Sala Dividida
 * Divida os alunos da sala abaixo em duas
 * listas com a mesma quantidade de alunos
 * - 'João', 'Juliana', 'Ana', 'Caio', 'Lara',
 * 'Marjorie', 'Guilherme', 'Aline', 'Fabiana',
 * 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian',
 * 'Isabela', 'Vinícius', 'Renan', 'Renata',
 * 'Daisy', 'Camilo'
 */

const nomes = [
  'João', 'Juliana', 'Ana', 'Caio', 'Lara',
  'Marjorie', 'Guilherme', 'Aline', 'Fabiana',
  'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian',
  'Isabela', 'Vinícius', 'Renan', 'Renata',
  'Daisy', 'Camilo'
]

const metade = Math.floor(nomes.length / 2)
const sala1 = nomes.slice(0, metade)
const sala2 = nomes.slice(metade)
// o slice retorna um novo array, não altera o original

console.log(`Turma inteira: ${nomes}`)
console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
