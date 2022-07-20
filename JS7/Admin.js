import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin') {
    super(nome, email, nascimento, role)
  }

  // nomeAdmin() {
  //   Essa chamada gera erro de syntax
  //   return this.#montaObjUser()
  // }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  }
}

// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2019-01-01');
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso('JS', 20));

export default Admin;
