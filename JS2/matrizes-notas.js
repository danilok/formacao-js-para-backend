const notas1 = [10 , 6.5, 8 ,7.5];
const notas2 = [9  , 6  , 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let media = 0;

for (let i = 0; i < notasGerais.length; i++) {
  let somaAluno = 0
  for (let j = 0; j < notasGerais[i].length; j++) {
    somaAluno += notasGerais[i][j]
  }
  let mediaAluno = somaAluno / notasGerais[i].length;
  console.log(`Média do aluno [${i}]: ${mediaAluno}`);
  media += mediaAluno;
}

console.log(`Média dos alunos: ${media / notasGerais.length}`);