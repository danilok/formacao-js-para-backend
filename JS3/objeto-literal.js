// notação literal
const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20"
}

console.log(objPersonagem);

const objPersonagem2 = objPersonagem;

objPersonagem2.nome = "Gandalf, o Cinzento"

// A variável objPersonagem2 não fez uma cópia do objeto original,
// apenas serviu como referência para o objeto original objPersonagem.
// Assim, qualquer alteração em qualquer um dos objetos altera ambos.
// Isso porque o JavaScript, quando trabalha com objetos, acessa os
// valores deles fazendo referência ao original. mas não cria uma cópia.
console.log(objPersonagem.nome); //Gandalf, o Cinzento
console.log(objPersonagem2.nome); //Gandalf, o Cinzento

// Já o acesso por cópia funciona com tipos primitivos 
// (string, number, booleano, null, symbol):
let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100

// O método Object.create() cria um novo objeto utilizando como
// protótipo o objeto passado via parâmetro.
const objPersonagem3 = Object.create(objPersonagem)
objPersonagem3.nome = "Gandalf, o Branco"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem3.nome) //Gandalf, o Branco