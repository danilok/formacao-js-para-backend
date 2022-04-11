# Fundamentos do JavaScript: Objetos

## 1 O que são objetos

### **O que são?**
Objeto em javascript é uma estrutura de dados que armazena um conjunto de pares `chave:valor`.
A chave é representada comumente por uma string mas o valor pode ser de qualquer tipo, string, número, função e até outro objeto.
O conjunto chave-valor devem ser separados por `,`.

Exemplo de declaração de um objeto:
```js
const obj = {
  chave1: 'valor1',
  chave2: 2,
  chave3: true,
  chave4: [1, 2, 3],
  chave5: () => console.log('olá mundo')
}
```

Um detalhe sobre a chave, apesar de ser comumente representada por string, é possível usar número e até a string que representa os valores booleanos.
Porém fazer este tipo de uso não é o mais indicado. Além disso, o Javascript geralmente utiliza o camelCase como padrão, porém as chaves podem ser definidas usando `-`, como em `e-mail`. Mas para isso, não é possível definir diretamente como no exemplo acima. É necessário envolver a chave entre aspas simples ou duplas. O caractere `_` é aceito como separador como em `minha_chave`. Outro cenário a ser evitado, é a chave espaço, o que também exige que a definição esteja envolvida por aspas.

```js
const obj2 = {
  'e-mail': 'teste@email.com',
  minha_chave: 490249280,
  'outra chave': true
}
```
Apesar de ser possível, não é recomendado usar este tipo de declaração, mas caso o objeto venha de uma fonte externa, pode surgir situações como essa.
É possível ainda definir chaves com os valores `true` ou `false`. Mas para evitar confusão com os valores booleanos, isso é desaconselhável.

### **Acessando dados**
O acesso a dados pode ser feito com notação de `.` ou notação de `[]`.

Usa-se a notação de ponto para acessar diretamente uma propriedade do objeto. Usando esta notação, não é possível acessar uma propriedade dinamicamente.
```js
objeto.propriedade
cliente.cpf
carro.rodas
obj.true // cenário não aconselhável
obj.false // cenário não aconselhável
```

Quando for necessário acessar uma propriedade dinamicamente, o mais apropriado é utilizar a notação de colchetes. Desta forma, é possível informar uma variável com o valor da chave que deseja-se acessar.
```js
objeto['propriedade']
const chave = 'cpf'
cliente[chave]
carro['rodas']
```

Também é possível usar a notação de colchetes caso um chave seja um valor númerico (não é possível acessar chaves númericas através da notação de `.`), tenha separadores como `-` ou que contenham espaços na chave.
```js
obj2['e-mail']
obj2['minha_chave']
obj2.minha_chave
obj2['outra chave']
```

### **Adicionando e alterando**

Para adicionar uma propriedade nova ou alterar uma existente, pode ser usando tanto notação de `.` quanto `[]`.

```js
const obj = {}
obj.nome = 'danilo'
obj['nome'] = 'Danilo'
```

### **Deletando propriedades**

Utilizar o operador unário `delete` informando em seguida a propriedade do objeto a ser deletada. Aceita tanto notação de `.` quanto `[]`.
```js
delete obj.nome
delete obj['nome']
```

Esta operação de remoção retorna um booleano. O retorno é `true` passando uma propriedade que existe e mesmo uma que não exista. Único caso em que o retorno será `false` quando a propriedade a ser removida for herdade de outro objeto.

A deleção de uma propriedade remove tanto a chave quanto o seu valor.

Caso tente ver o valor de uma chave após ela ser removido, o valor será `undefined`.

## 2 Manipulação de objetos

### **Tipos de dados e valores**

Para um propriedade de um objeto, é possível usar diversos tipos de valores, tanto valores primitivos quanto estruturas de dados, como o `Array`.

### **Objeto em objetos**

Um objeto pode ter em uma de suas propriedades, um outro objeto. Este é um cenário bem comum em Javascript.

### **Listas de objetos**

Podemos combinar `Array` com objetos como valor de uma propriedade. Nesse caso, pode usar os métodos de `Array` para manipular as informações contidas nessa propriedade, como `filter`, `push`, `pop`.

### **Funções**

O objeto não precisa ser uma estrutura estática, ele pode ter informações geradas dinamicamente através de funções associadas a alguma propriedade. Geralmente no paradigma de orientação a objetos, essas funções são chamadas de `métodos`.

### **Objeto literal e referência**

Vimos anteriormente como é a estrutura de um objeto, com seus pares de chave e valor:

```js
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}
```

O exemplo acima, assim como o que estamos criando durante esta aula, é o de um objeto literal.

Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves `{ }`, que atribuímos a uma variável para que o valor possa ser acessado depois. Exatamente como no exemplo acima.

Objetos literais funcionam bem quando queremos ter um objeto único, com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele. Vejamos o código a seguir:

```js
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = objPersonagem
```
Se alterarmos apenas o objPersonagem2, o resultado é:
```js
const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
```
A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):
```js
let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100C
```
Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método `Object.create()`:
```js
const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
```
O método `Object.create()` cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, `objPersonagem2` é uma instância diferente de `objPersonagem` e pode ser trabalhada de forma independente.

Você pode ver mais exemplos desse método na [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create).

Nas próximas aulas veremos também outra forma de criar objetos, utilizando `funções construtoras`.