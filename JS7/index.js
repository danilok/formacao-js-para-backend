import User from './User.js';
import Docente from './Docente.js';
import Admin from './Admin.js';

const novoUser = new User('Mariana', 'm@m.com', '2000-03-01');
console.log(novoUser.exibirInfos());
console.log(novoUser.exibirObj());
// console.log(novoUser.#montaObjUser()); Erro de sintaxe

// novoUser.nome = 'Márcia';
// console.log(novoUser.nome); // Márcia
// console.log(novoUser.exibirInfos()); // Márcia m@m.com

// try {
//   novoUser.#nome = 'Márcia'
// } catch (error) {
//   // SyntaxError: Private field '#nome' must be declared in an enclosing class
//   console.log(error);
// }

const novoAdmin = new Admin('Caio', 'c@c.com', '2000-04-25')
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.nome);
novoAdmin.nome = 'Carlos';
console.log(novoAdmin.nome);
console.log(novoAdmin.exibirInfos());
try {
  novoAdmin.nome = '';
  console.log(novoAdmin.nome);
  console.log(novoAdmin.exibirInfos());
} catch (error) {
  console.error(error);
}