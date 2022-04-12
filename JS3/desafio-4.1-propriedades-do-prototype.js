/**
 * DESAFIO: Cliente genérico
 * Gerar uma função que permita a criação de novos
 * clientes a partir de um modelo.
 */

// função construtora de Cliente
function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  }
}

// instancia nova de Cliente
const cliente = new Cliente('Danilo', '92349204021', 'danilo@email.com', 200);
console.log(cliente);
cliente.depositar(20);
console.log(cliente);
console.log(cliente.hasOwnProperty('nome'))
console.log(Object.keys(cliente))