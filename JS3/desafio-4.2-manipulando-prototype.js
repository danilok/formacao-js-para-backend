/**
 * DESAFIO: Cliente poupança
 * Aproveitar o cliente que já existe e criar a partir dele
 * um novo tipo de cliente para contas poupança.
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

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca) {
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoupanca = saldoPoupanca;
}

// instancia nova de Cliente
const cliente = new Cliente('Danilo', '92349204021', 'danilo@email.com', 200);
console.log(cliente);

const clientePoupanca = new ClientePoupanca('Danilo', '92349204021', 'danilo@email.com', 200, 300);
console.log(clientePoupanca);

// ClientePoupanca.prototype.depositarPoupanca = function (valor) {
clientePoupanca.depositarPoupanca = function (valor) {
  this.saldoPoupanca += valor;
}

clientePoupanca.depositarPoupanca(30);
console.log(clientePoupanca);

const clientePoupanca2 = new ClientePoupanca('Monique', '879654321589', 'monique@email.com', 100, 130);
console.log(clientePoupanca2);

try {
  clientePoupanca2.depositarPoupanca(60);
  console.log(clientePoupanca2);
} catch (error) {
  console.log('> Não existe o método para o clientePoupanca2')
}

// Definir o método no protótipo 
ClientePoupanca.prototype.depositarPoupanca = function (valor) {
  this.saldoPoupanca += valor;
}

clientePoupanca2.depositarPoupanca(60);
console.log(clientePoupanca2);

console.log(clientePoupanca2.hasOwnProperty('nome'))
console.log(clientePoupanca2.hasOwnProperty('depositarPoupanca'))
console.log(ClientePoupanca.prototype.hasOwnProperty('depositarPoupanca'))
console.log(cliente.hasOwnProperty('saldoPoupanca'))
console.log(clientePoupanca.hasOwnProperty('saldoPoupanca'))
console.log(cliente instanceof Cliente)
console.log(typeof cliente)
console.log(typeof clientePoupanca)
console.log(typeof clientePoupanca2)
console.log(clientePoupanca instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)