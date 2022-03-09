function soma(numero1, numero2) {
  return numero1 + numero2
}

console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))

// parâmetros x argumentos
// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e tenho ${idade} anos de idade`
}

console.log(nomeIdade('Danilo', '35'))
console.log(nomeIdade('35', 'Danilo'))

function multiplica(numero1 = 1, numero2 = 1) {
  return numero1 * numero2
}

console.log(multiplica(3, 5))
console.log(multiplica(soma(3, 2), soma(5, 4)))