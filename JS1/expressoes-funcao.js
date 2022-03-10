/*
console.log(soma(1, 2))

A chamada acima gera um erro pois expressões de função não sofrem hoisting, ou seja, 
só podem ser chamadas após serem declaradas.

Segue o erro:
console.log(soma(1, 2))
            ^

ReferenceError: Cannot access 'soma' before initialization
    at Object.<anonymous> (C:\Dev\formacao-js-para-backend\JS1\expressoes-funcao.js:1:13)
*/
const soma = function (num1, num2) { return num1 + num2 }
console.log(soma(1, 2))


console.log(apresentar())

// Este é um exemplo de declaração de função com `function`
// A mesma pode ser chamada antes de ser declarada pois sofre hoisting,
// ou seja, ao carregar o programa em memória, esta declaração será
// movida para o início do código, assim como as declarações com var,
// podendo então ser chamada em qualquer lugar do código.
function apresentar() {
  return 'Olá'
}
