/**
 * DESAFIO: Puxando relatório
 * Percorrer um objeto e extrair informações básicas do
 * cliente em um formato legível e de forma automatizada
 * para fornecer a outros departamentos do banco.
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

let relatorio = '';

// percorre todos os campos chaves do objeto
for (let info in cliente) {
  // relatorio += info; // imprimirá apenas as chaves
  const type = typeof cliente[info];
  if (['object', 'function'].includes(type)) {
    continue
  }
  relatorio += `${info}:\t${cliente[info]}\n`;
}

console.log(relatorio);
