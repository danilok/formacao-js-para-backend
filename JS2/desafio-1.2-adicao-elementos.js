/*
 * DESAFIO: Adicionando elementos
 * Um professor acidentalmente passou apenas 3 das 4 notas
 * no sistema para um aluno:
 * - 10, 6 e 8
 * Para corrigir, adicione a nota 7 e faça o cálculo da
 * média correta.
 */

notas = [10, 6, 8]
console.log(`notas iniciais: ${notas}`)
const tamanhoNovo = notas.push(7)
console.log(`Novo tamanho do array: ${tamanhoNovo}`)
console.log(`notas alteradas: ${notas}`)
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media)


// 
notas.push()
console.log(notas)
console.log(notas.length)
console.log(notas[4])
console.log(+notas[4])
console.log(1 + undefined)
let media2 = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length
console.log(media2)