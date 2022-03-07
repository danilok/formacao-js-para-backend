const idadeMinima = 18;
const idadeClienteMenor = 16;
const idadeClienteMaior = 20;

// Condicional
console.log('Bebida para cliente de menor:')
if (idadeClienteMenor >= idadeMinima) {
  console.log("cerveja")
} else {
  console.log("suco")
}

// Operador ternário
console.log('Bebida para cliente de menor:')
console.log(idadeClienteMenor >= idadeMinima ? "cerveja" : "suco")
console.log('Bebida para cliente de maior:')
console.log(idadeClienteMaior >= idadeMinima ? "cerveja" : "suco")

const nome = "Danilo"
const bebidaMaior = "drink"
const bebidaMenor = "suco"
const pedido = `${nome} diz: "Por favor, quero beber ${idadeClienteMaior >= 18 ? bebidaMaior : bebidaMenor}`
console.log(pedido)
