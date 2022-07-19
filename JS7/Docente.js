import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente') {
    super(nome, email, nascimento);
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} passou no curso ${curso}`;
  }
}

const novoDocente = new Docente('Diogo', 'd@d.com', '2011-01-03');
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'));