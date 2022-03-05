const texto1 = "Olá mundo!"
const text2 = 'Olá mundo!'
const senha = "senhasupersegura456!"
const stringDeNumeros = '24252'

const citacao = "O Leo disse 'oi'!"
console.log(citacao)

// concatenação

const apresentacao = "O meu nome é "
const nome ="John Doe"
console.log(apresentacao + nome)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha1 = "minhaSenha123"
console.log(senha1.length) // 13 caracteres