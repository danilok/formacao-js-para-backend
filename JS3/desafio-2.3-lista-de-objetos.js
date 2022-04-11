/**
 * DESAFIO: Lista de dependentes
 * Verificar a melhor forma de agregar a informação de
 * um novo dependente ao objeto Cliente.
 */

 const cliente = {
  nome: 'Danilo',
  idade: 35,
  cpf: '42424256209',
  email: 'danilo@email.com',
  fones: ['55789452315', '55789452879'],
  dependentes: [
    {
      nome: 'Monique Silva',
      dataNasc: '11/01/2938',
      parentesco: 'conjuge'
    }
  ] 
}

console.log(cliente);

cliente.dependentes.push({
  nome: 'Rebeca Silva',
  dataNasc: '23/04/2957',
  parentesco: 'filha'
})

console.log(cliente);

const dependenteMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '23/04/2957')

console.log(dependenteMaisNova[0].nome)