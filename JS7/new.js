function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function() {
    return `${this.nome} ${this.email}`;
  }
}

const novoUser = new User('Juliana', 'j@j.com');
console.log(novoUser.exibirInfos());
console.log(novoUser.prototype)
console.log(novoUser.__proto__)

function Admin(role) {
  User.call(this, 'Juliana', 'j@j.com')
  this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoAdmin = new Admin('admin')
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.role);

const user = {
  exibirInfos: function(nome) {
    return nome;
  }
}

const novoUser2 = Object.create(user);
console.log(novoUser2.exibirInfos('Juliana'));
console.log(user.isPrototypeOf(novoUser2));

const user2 = {
  init: function(nome, email) {
    this.nome = nome;
    this.email = email;
  },
  exibirInfos: function() {
    return this.nome;
  }
}

const novoUser3 = Object.create(user2);
novoUser3.init('Juliana', 'j@j.com')
console.log(novoUser3.exibirInfos());