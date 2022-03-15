const idades = [30, 35, 28]
const nomes = ['Ana', 'Juliana', 'Leonardo']
const faculdade = [false, true, true]

const funcionarios = [idades, nomes, faculdade]

for (let i = 0; i < funcionarios.length; i++) {
  // 0 -> idades
  // 1 -> nomes
  // 2 -> faculdade
  console.log(`${funcionarios[1][i]} tem ${funcionarios[0][i]} anos e ${funcionarios[2][i] ? 'cursa' : 'não cursa'} faculdade`)
}

console.group('Imagem')
const imagem = [[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]]

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    console.log(`pos[${i}][${j}]: ${imagem[i][j]}`)
  }
}

console.table(imagem)
console.groupEnd()
