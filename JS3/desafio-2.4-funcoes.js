/**
 * DESAFIO: Fazendo depósitos
 * Adicionar uma propriedade que permita "ações", para
 * que os clientes que estão cadastrados consigam fazer
 * operações bancárias.
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
}

console.log(`Saldo do cliente ${cliente.nome}: ${cliente.saldo}`);
cliente.depositar(20);
console.log(`Saldo do cliente ${cliente.nome}: ${cliente.saldo}`);