/**
 * DESAFIO: Printar infos
 * Acessar um objeto com informações de um cliente
 * e exibir essas informações no console
 */
const cliente = {
  nome: 'Danilo',
  idade: 35,
  cpf: '42424256209',
  email: 'danilo@email.com'
}

console.log(`Meu nome é ${cliente.nome} e tenhos ${cliente.idade} anos.`)
console.log(`${cliente.cpf.substring(0, 3)}`)