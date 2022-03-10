// declaração de função
function apresentar(nome) {
  return `meu nome é ${nome}`
}

// expressão de função
const apresentarEF = function (nome) {
  return `meu nome é ${nome}`
}

// arrow functions
const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1, num2) => num1 + num2

const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "somente número de 1 a 9"
  } else {
    return num1 + num2
  }
}

console.log(apresentar('Danilo'))
console.log(apresentarEF('Danilo'))
console.log(apresentarArrow('Danilo'))
console.log(soma(1, 2))
console.log(somaNumerosPequenos(11, 2))
console.log(somaNumerosPequenos(1, 23))
