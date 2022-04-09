const nome = 'Alura';
let nomeMaiusculas = '';

for (let i = 0; i < nome.length; i++) {
  nomeMaiusculas += nome[i].toUpperCase();
}

console.log(nomeMaiusculas);

const nomeDoCurso = 'Fundamentos de JS';
const nomeDaPlataforma = ' Alura';

const nomeCompleto = nomeDoCurso.concat(nomeDaPlataforma);
console.log(nomeCompleto);

// map
try {
  console.log(typeof nomeCompleto)
  const nomeMinisculas = nomeCompleto.map(letra => letra.toLowerCase())
  console.log(nomeMaiusculas)
} catch (error) {
  console.log(error)
}

// filter
try {
  console.log(typeof nomeCompleto)
  const vogais = nomeCompleto.filter(letra => ['a', 'e', 'i', 'o', 'u'].includes(letra.toLowerCase()))
  console.log(vogais)
} catch (error) {
  console.log(error)
}