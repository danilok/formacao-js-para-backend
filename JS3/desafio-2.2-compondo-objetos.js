/**
 * DESAFIO: Compondo um objeto
 * Adicionar dependentes para um dos clientes
 * cadastradas, com nome, idade e parentesco.
 */

const cliente = {
  nome: 'Danilo',
  idade: 35,
  cpf: '42424256209',
  email: 'danilo@email.com',
  fones: ['55789452315', '55789452879'],
}

cliente.dependentes = {
  nome: 'Monique',
  dataNasc: '11/01/2938',
  parentesco: 'conjuge'
}

console.log(cliente);

cliente.dependentes.nome = 'Monique Silva';

console.log(cliente);
