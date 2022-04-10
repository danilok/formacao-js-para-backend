/**
 * DESAFIO: Adicionando campos
 * Adicionar informações importantes que ainda estão
 * faltando, como telefone e também seus valores.
 */
const cliente = {
  nome: 'Danilo',
  idade: 35,
  cpf: '42424256209',
  email: 'danilo@email.com',
}

console.log(cliente);

cliente.fone = '31975865221';

console.log('Adicionando fone: ', cliente);

cliente.fone = '91465487133';

console.log('Alterando fone: ', cliente);

cliente['rg'] = '31331413121';

console.log('Adicionando RG: ', cliente);

cliente['rg'] = '31131313114';

console.log('Alterando RG: ', cliente);
