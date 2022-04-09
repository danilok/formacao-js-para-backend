const numeros = [43, 50, 65, 12];

const somaArrow = numeros.reduce((acum, atual) => acum + atual, 0);

console.log(`SomaArrow: ${somaArrow}`);

const somaFn = numeros.reduce(function (acum, atual) {
  return atual + acum
 }, 0);

console.log(`SomaFn: ${somaFn}`);

function acumulador(acum, atual) {
return atual + acum
}

const somaAcumulador = numeros.reduce(acumulador, 0);

console.log(`SomaAcumulador: ${somaAcumulador}`);

// Exemplo de função passando todos os parâmetros para função callback do reduce
function acc(previous, current, index, arr) {
  console.log(previous, current, index, arr)
  return previous + current;
}

const notas = [5, 6, 7, 10]

const media = notas.reduce(acc, 0) / notas.length