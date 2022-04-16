/**
 * DESAFIO: Cliente poupança
 * Aproveitar a classe cliente que já existe e criar a partir dela
 * uma nova classe para cliente com contas poupança.
 */

class Cliente {
  constructor(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
  } 

  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(`Seu saldo é ${this.saldo}`)
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, cpf, email, saldo, saldoPoupanca) {
    super(nome, cpf, email, saldo);
    this.saldoPoupanca = saldoPoupanca;
  }

  depositarPoupanca(valor) {
    this.saldoPoupanca += valor;
  }

  exibirSaldoPoupanca() {
    console.log(`Seu saldo da poupança é ${this.saldoPoupanca}`)
  }
}

const cliente = new ClientePoupanca('Danilo', '92349204021', 'danilo@email.com', 200, 300);
console.log(cliente);
cliente.exibirSaldo();
cliente.exibirSaldoPoupanca();
cliente.depositar(20);
cliente.depositarPoupanca(30);
cliente.exibirSaldo();
cliente.exibirSaldoPoupanca();