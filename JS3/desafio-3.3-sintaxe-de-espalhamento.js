/**
 * DESAFIO: Lista de dependentes
 * Extrair de uma listagem de clientes apenas as informações
 * de dependentes e montar uma lista única, para análise de
 * outros departamentos do banco.
 */

const clientes = [
  {
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
      },
      {
        nome: 'Rebeca Silva',
        dataNasc: '23/04/2957',
        parentesco: 'filha'
      }
    ],
    saldo: 100,
    depositar: function(valor) {
      this.saldo += valor;
    }
  },
  {
    nome: 'Adenor',
    dependentes: [
      {
        nome: 'Samia',
        dataNasc: '02/04/2938',
        parentesco: 'filha'
      }
    ],
  }
]

const dependentes = clientes.reduce((acum, cliente) => {
  acum.push(...cliente.dependentes);
  return acum;
}, [])

console.table(dependentes);