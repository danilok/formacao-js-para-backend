# Curso de Fundamentos do JavaScript: Tipos, variáveis e funções

## 1 Tipos primitivos

- number
- string
- boolean

Outros tipos relevantes:
- null
- boolean

## 2 Declarando variáveis

### Declarações
- var
  - hoisting
  - escopo global
  - valor alterável
- let
  - escopo local
  - valor alterável
- const
  - escopo local
  - valor não alterável (referência)

### Valores de expressões *truthy* or *falsy*

The following values are considered falsy:

- false
- 0
- -0
- ""
- null
- undefined
- NaN

All other values are considered **truthy**!

This means that the following code is unnecessary:

- === undefined
- === null
- === true
- === false
- === 0

### Conversões
- implícito
- explícito

## 3 O JavaScript e o NodeJS

### Característicias do JavaScript
- Tipagem dinâmica
  - Tipo definidos em tempo de execução e podem ser alterados
- Multiparadigma
  - Possibilita codificar em vários paradigmas como funcional, procedural, OO...
- Por que se chama JS?
  - Fundação ECMA 
- O que é ES6/ES2015
  - Versão do JavaScript que trouxe muitas melhorias e alavancou seu uso
- Linguagem interpretada
  - Uso de um interpretador como um browser ou Node, não precisa ser compilada

### NodeJS
- Possibilita executar o JavaScript fora do navegador
- Engine V8 (mesmo do Chrome)

### Erros
- `RangeError`: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

- `ReferenceError`: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

- `SyntaxError`: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

- `TypeError`: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.
### Stack Trace
Exibe as chamadas executadas até atingir o ponto do código que gerou o erro. Ao analisar esse caminho, é possível encontrar facilmente o caminho executado até atingir o erro. Isso é importante pois o erro pode ter sido gerado em algum ponto anterior.


### Console API
- console.log
- console.time
- console.timeEnd
- console.table
- console.group
- console.groupEnd
- console.count
- console.countReset
- console.trace
- console.error

## 4 Operadores

- `==`
- `===`
- `||`
- `&&`
- `!=`
- `!==`
- Operador ternário: `(condicao) ? <true> : <false>`
- Outros operadores: [Documentação oficial](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)

### Template string
Uso com acento grave para delimitar a string e para utilizar variáveis ou operações, use a notação `${}`.


## 5 Funções

### Declaração da função
Usa-se a *keyword* `function nome-da-funcao(<lista de parametros>) { // codigo }`
```js
function soma(numero1, numero2) {
  return numero1 + numer2
} 
```

### Chamada da função
`nome-da-funcao(<valores do parametros>)`
```js
soma(3, 6) //9
```

### Parâmetros
- ordem é relevante
- existem apenas dentro do escopo da função
- podem ser valores primitivos, objetos ou até mesmo outras funções

### Argumentos
- valores passados nos parâmetros de uma função
Ex: parâmetro `numero1` da função `soma`, ao ser executada no exemplo de chamada da função acima, o argumento relacionado ao parâmetro `numero1`é o valor `3`, e `6` seria o argumento do parâmetro `numero2`.

### Expressões de função
A declaração anônima é atribuída à uma variável e sua chamada deve ser feita usando o nome da variável.
```js
const divide = function (num1, num2) { return num1 / num2 }
console.log(divide(4, 2))
```
Um ponto importante é que diferentemente das funções declaradas, expressões de função não sofrem *hoisting*.
Portanto podemos chamá-las apenas depois de sua declaração.

### Arrow Function
As arrow functions também são funções anônimas e após os parâmetros, usamos o operador `=>` e em seguida passamos o código que a função executará.
Em questão de *hoisting*, se comportam como expressões de função, ou seja, só podemos usar uma arrow function após sua definição.
Algumas características para definir uma arrow function:
- quando o código a ser executado é apenas uma linha, não é necessário usar `{}`
- quando o código a ser executado for apenas uma instrução e for necessário retornar seu valor, a *keyword* `return` pode ser suprimido
- não é necessário usar a *keyword* `function`, usa-se o operador `=>`

Exemplos de arrow functions:
```js
const saudacao = () => `olá`
const apresentar = (nome) => `olá, me chamo ${nome}`
const subtrai = (num1, num2) => num1 - num2
const divide = (num1, num2) => {
  if (num === 0) {
    console.error('Não é possível fazer essa divisão')
    return
  }
  return num1 / num2
}
```
