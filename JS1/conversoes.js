// tipo de dados
// booleanos

// conversão implícita
const numero = 456
const numeroString = "456";
const numeroFloat = 456.75
const numeroFloatString = "456.75";
const booleanTrue = true
const booleanFalse = false

// conversão implícita
console.log(numero == numeroString)
console.log(numero === numeroString)
console.log(numero + numeroString)
console.log(numeroFloat == numeroFloatString)
console.log(numeroFloat === numeroFloatString)
console.log(numeroFloat + numeroFloatString)
console.log(numeroFloat + +numeroFloatString)
console.log(!numero)
console.log(!!numero)
console.log(!numeroString)
console.log(!!numeroString)
console.log(!numeroFloat)
console.log(!!numeroFloat)
console.log(!numeroFloatString)
console.log(!!numeroFloatString)
console.log(!booleanTrue)
console.log(!!booleanTrue)
console.log(!booleanFalse)
console.log(!!booleanFalse)

// conversão explícita
console.log(numero.toString() + numeroString)
console.log(String(numero) + numeroString)
console.log(numero + Number(numeroString))
console.log(numero + parseInt(numeroString))
console.log(numero + parseFloat(numeroString))
console.log(numero + +numeroString)
console.log(numeroFloat + Number(numeroFloatString))
console.log(numeroFloat + parseInt(numeroFloatString))
console.log(numeroFloat + parseFloat(numeroFloatString))
console.log(numeroFloat + +numeroFloatString)
console.log(String(booleanTrue))
console.log(String(booleanFalse))

console.log(Number('asdf')) // NaN
console.log(Number('1.4')) // 1.4
console.log(parseInt('asdf')) // NaN
console.log(parseFloat('asdf')) // NaN
console.log(parseInt('1.4')) // 1
console.log(parseFloat('1.4')) // 1.4
// Nota-se que a conversão com parse* converte o que for possível
console.log(parseInt('1.4.a')) // 1
console.log(parseFloat('1.4.a')) // 1.4
console.log(Number(booleanTrue))
console.log(Number(booleanFalse))
