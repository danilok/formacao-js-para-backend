let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100

const constante = 0
try {
  // const constante // SyntaxError: Missing initializer in const declaration
  constante = 1 // TypeError: Assignment to constant variable.
} catch (error) {
  console.log(error)
}
console.log(constante) // 0
