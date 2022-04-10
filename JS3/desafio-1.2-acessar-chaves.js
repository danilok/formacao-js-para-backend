/**
 * DESAFIO: Acessar chaves
 * Consultar um objeto utilizando uma lista de chaves
 * relativas a informações de clientes geradas pelo
 * sistema e imprimir o resultado em tela
 */
const cliente = {
  nome: 'Danilo',
  idade: 35,
  cpf: '42424256209',
  email: 'danilo@email.com',
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

console.group('Impressão com forEach:')
console.log(`Chaves: ${chaves}`)
chaves.forEach(chave => console.log(`${chave}: ${cliente[chave]}`))
console.groupEnd()