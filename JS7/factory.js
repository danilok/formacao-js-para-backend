function criaUser(nome, email) {
  return {
    nome,
    email,
    exibeInfos() {
      return `${nome}, ${email}`;
    }
  }
}

const newUser = criaUser('Rodrigo', 'r@r.com');
console.log(newUser);
console.log(newUser.exibeInfos());

function User(nome, email) {
  this.nome = nome;
  this.email = email;
 
  this.exibeInfos = function() {
    return `${this.nome}, ${this.email}`;
  }
}

const newUser2 = new User('Mariana', 'm@m.com');
console.log(newUser2);
console.log(newUser2.exibeInfos());
