/**
 * DESAFIO: Oferta de seguro
 * Percorrer um objeto, verificar se existe a chave 'dependentes'
 * e, caso exista, enviar uma mensagem de oferta de seguro
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

const cliente2 = {
  nome: 'Tiago',
  idade: 23,
  cpf: '31224256209',
  email: 'tiagp@email.com',
  fones: ['55789452325']
}

function oferecerSeguro(obj) {
  if (Object.keys(obj).includes('dependentes')) {
    console.log(`Enviar oferta de seguro para o cliente ${obj.nome}.`);
  } else {
    console.log(`Cliente ${obj.nome} não possui dependentes.`);
  }
}

oferecerSeguro(cliente);
oferecerSeguro(cliente2);

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
