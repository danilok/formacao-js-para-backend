class User {
  #nome
  #email
  #nascimento
  #role
  #ativo

  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || 'estudante'
    this.#ativo = ativo;
  }

  // métodos get não podem receber parâmetros
  // são usados como se fossem uma propriedade: user.nome
  get nome() {
    // pode conter lógica aqui
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  set nome(value) {
    if (!value) {
      throw new Error('Nome inválido')
    }
    this.#nome = value;
  }

  #montaObjUser() {
    return ({
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo,
    })
  }

  exibirInfos() {
    return `${this.#nome} ${this.#email}`;
  }

  exibirObj() {
    const objUser = this.#montaObjUser();
    return `${objUser.nome} ${objUser.email} ${objUser.nascimento} ${objUser.role} ${objUser.ativo}`;
  }
}

// const novoUser = new User('Juliana', 'j@j.com', '2020-01-01');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser)); //true

export default User;
