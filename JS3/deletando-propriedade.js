const objPersonagem = {
  nome: 'Gandalf',
  classe: 'mago',
  nivel: 20,
  aliado: {
    nome: 'Saruman',
    classe: 'mago'
  },
  status: 'desaparecido'
}

console.log(objPersonagem);

console.log(delete objPersonagem.aliado);

console.log(objPersonagem.aliado);
console.log(delete objPersonagem.aliado);
console.log(objPersonagem);
console.log(delete objPersonagem['status']);
console.log(objPersonagem);

