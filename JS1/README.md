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
Usa-se keyword `function nome-da-funcao(<lista de parametros>) { // codigo }`
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