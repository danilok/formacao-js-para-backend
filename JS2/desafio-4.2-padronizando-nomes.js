/*
 * DESAFIO: Padronizando os nomes
 * Precisamos padronizar a lista de alunos
 * para conter apenas letras maiúsculas
 * - ['ana julia', 'Caio vinicius', 'BIA silva']
 */

const alunos = ['ana julia', 'Caio vinicius', 'BIA silva'];

const alunosPadronizados = alunos.map(aluno => aluno.toUpperCase());

console.log(alunosPadronizados);
