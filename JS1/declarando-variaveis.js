// var

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(`var area: ${area}`);
var area // hoisted

// let

let forma = 'retângulo'
let altura_let = 5;
let comprimento_let = 7;
let area_let

if (forma === 'retângulo') {
  area_let = altura_let * comprimento_let;
} else {
  area_let = (altura_let * comprimento_let) / 2;
}

console.log(`let area da forma ${forma}: ${area_let}`);
//let area // let não é hoisted como var

// const

let forma_const = 'retângulo'
const altura_const = 5;
const comprimento_const = 7;
let area_const
//const area_const // const precisa ser inicializado
//const area_const = 0 // como o valor precisa ser alterado pela forma, não podemos usar const

if (forma === 'retângulo') {
  area_const = altura_const * comprimento_const;
} else {
  area_const = (altura_const * comprimento_const) / 2;
}

console.log(`const area da forma ${forma}: ${area_const}`);
//const area // const não é hoisted como var
