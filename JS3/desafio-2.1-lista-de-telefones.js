/**
 * DESAFIO: Lista de telefones
 * Acessar a lista de números de telefone das pessoas
 * cadastradas no sistemas e imprimi-la, verificando se
 * há mais de um número em algum cadastro
 */

const cliente = {
  nome: 'Danilo',
  idade: 35,
  cpf: '42424256209',
  email: 'danilo@email.com',
  fones: ['55789452315', '55789452879']
}

console.log(`Fones do cliente ${cliente.nome}`)
cliente.fones.forEach((fone, i) => console.log(`Fone [${i}]: ${fone}`))
