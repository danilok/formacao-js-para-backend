/**
 * Mais exemplos de chave e acesso às propriedades
 */
 const cliente = {
  nome: 'Danilo',
  idade: 35,
  cpf: '42424256209',
  email: 'danilo@email.com',
  'data-de-nascimento': '13/31/4242',
  true: 'valor',
  false: 3,
  1: true,
  '-1': false,
  nova_chave: 'valor',
  'nova chave': 'valor2'
}

const chaves = ["nome", "idade", "cpf", "email"];
const chave = "nome"

// console.log(cliente.chaves[0]) // erro por tentar acessar propriedade de undefined
console.log(cliente[chaves[0]]) // Danilo
console.log(cliente[chaves[1]]) // 35
console.log(cliente[chaves[2]]) // 42424256209
console.log(cliente[chaves[3]]) // danilo@email.com
console.log(cliente.chave) // undefined pois não existe valor para chave 'chave'
console.log(cliente[chave]) // Danilo
console.log(cliente["nome"]) // Danilo
// console.log(cliente.data-de-nascimento) // reference-error
// console.log(cliente.'data-de-nascimento') // reference-error
console.log(cliente['data-de-nascimento']) // reference-error
console.log(cliente.true) // valor
console.log(cliente.false) // 3
// console.log(cliente.1) // syntax-error
console.log(cliente['1']) // true
console.log(cliente['-1']) // false
console.log(cliente.nova_chave) // false
console.log(cliente['nova chave']) // false

console.group('Impressão com forEach:')
console.log(`Chaves: ${chaves}`)
chaves.forEach(chave => console.log(`${chave}: ${cliente[chave]}`))
console.groupEnd()

console.log(Object.keys(cliente))