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

const cliente = new Cliente('Danilo', '92349204021', 'danilo@email.com', 200);
console.log(cliente);
cliente.exibirSaldo();
cliente.depositar(20);
cliente.exibirSaldo();