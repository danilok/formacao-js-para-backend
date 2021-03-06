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

## 3 Percorrendo objetos

### **For...in**

Usar o comando `for...in` é útil quando queremos percorrer todas as chaves de um objeto.
Exemplo:
```js
const obj = {
  chave1: 'nome',
  chave2: 1,
  chave3: true
}

for (let chave in obj) {
  console.log(chave)
}
// chave1
// chave2
// chave3
```

### **Métodos de objeto**

- `Object.keys()`:
  - Retorna um array com todas as chaves do objeto
- `Object.values()`
  - Retorna um array com todas os valores do objeto
- `Object.entries()`
  - Retorna um array de arrays formados por dois elementos, sendo o primeiro a chave e o segundo os valores.

### **Sintaxe de espalhamento**

O operador `...` chamado de `spread operator` serve para espalhar o conteúdo de um objeto.

Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. Vamos ver mais alguns exemplos:
```js
const fichaGuerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const equipoGuerreiro = {
 espada: "Andúril",
 capa: "capa élfica +2"
}
```
Vamos agora tentar juntar esses dois objetos em apenas um, que vamos chamar de personagens. Em um primeiro teste, vamos criar um novo objeto literal com { } e passar para este objeto as variáveis de cada personagem:
```js
const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)
```
O resultado no console não é exatamente o que queremos, pois os objetos ainda estão separados; o nome de cada variável agora é uma chave e o valor da chave é cada um dos objetos:
```js
{
  fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
  equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
}
```
Aqui entramos com o spread operator, adicionando a sintaxe de três pontos (reticências) antes do nome de cada objeto literal, com cada objeto separado por vírgula:
```js
const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)
```
O console agora mostra o resultado esperado:
```js
{
 nome: 'Aragorn',
 classe: 'guerreiro',
 espada: 'Andúril',
 capa: 'capa élfica +2'
}
```
Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:
```js
const mago = {
 nome: "Gandalf",
 classe: "mago"
}
 const guerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const ranger = {
 nome: "Legolas",
 classe: "ranger"
}
```
Os três objetos acima têm as mesmas propriedades. Vamos ver o que acontece se tentarmos “espalhar” os dados em um único objeto com o spread operator:
```js
const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)
```
O resultado não será bem o que esperamos:
```js
{ nome: 'Legolas', classe: 'ranger' }
```
O JavaScript sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o resultado final foi somente o último objeto declarado dentro do objeto personagens.

Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.

Também é possível utilizar esta sintaxe com arrays. Você pode conferir mais exemplos neste [Alura+](https://www.youtube.com/watch?v=f8a-qwKC5yk).

### **JSON**

Quando começamos a estudar programação back-end, um termo que sempre aparece logo de cara é JSON. Mas o que é isso?

JSON é um acrônimo de `JavaScript Object Notation` ou “notação de objeto JavaScript”. Como o próprio nome já sugere, JSON é um formato que utiliza a sintaxe de objetos e arrays do JavaScript. É muito versátil e se tornou a forma mais comum de estrutura para transferência de dados entre cliente/servidor, e tem sido utilizado mesmo em programas que não utilizam JavaScript. A estrutura também é mais fácil de compreender, comparada com outro formato de transferência de dados, o XML:

Formato JSON:
```json
 {
   "id": 59,
   "titulo": "ECMAScript 6",
   "autor": "Diego Martins de Pinho",
   "categoria": "programação"
 }
```
Formato XML:
```xml
<livro id="59">
 <titulo>ECMAScript 6</titulo>
 <autor>Diego Martins de Pinho</autor>
 <categoria>programação</categoria>
</livro>
```
Você pode conferir mais sobre o XML aqui.

À primeira vista, um objeto JSON não parece muito diferente de um objeto literal em JavaScript:
```json
{
 "editora": "Casa do Código",
 "catalogo": [
 {
   "id": 50,
   "titulo": "Primeiros Passos com NodeJS",
   "autor": "João Rubens",
   "categoria": "programação",
   "versoes": ["ebook", "impresso"]
 },
 {
   "id": 59,
   "titulo": "ECMAScript 6",
   "autor": "Diego Martins de Pinho",
   "categoria": "programação",
   "versoes": ["ebook"]
 },
 {
 "id": 39,
 "titulo": "Orientação a Objetos",
 "autor": "Thiago Leite",
 "categoria": "programação",
 "versoes": ["ebook", "impresso"]
 }
]}
```
O código acima mostra um JSON com dois conjuntos de propriedade/valor: um tem valor de string (editora) e catálogo é um array de objetos, cada um representando um livro.

As diferenças de sintaxe entre JSON e um objeto JavaScript são:

- No JSON, as chaves sempre devem estar entre aspas duplas `” ”`, no formato string. Já no objeto JavaScript, as aspas não são obrigatórias;
- O JSON aceita como valores apenas dados primitivos (string, number para números finitos, true, false e null), objetos e arrays. Não é possível declarar funções/métodos;
- Não são permitidas vírgulas após o último conjunto de chave/valor do objeto.

**JSON** é um formato criado para transferência de dados, sendo assim é necessário convertê-lo para um objeto JavaScript para que os dados possam ser utilizados em um programa. Para isso, existem dois métodos nativos:

- `JSON.parse()`: converte JSON para um objeto JavaScript;
- `JSON.stringify()`: converte um objeto JavaScript para o formato JSON.

Por exemplo, podemos converter um objeto de livro para o JSON:

```js
const jsonLivro = JSON.stringify({
 id: 50,
 titulo: "Primeiros Passos com NodeJS",
 autor: "João Rubens",
 categoria: "programação",
 versoes: ["ebook", "impresso"]
})

console.log(jsonLivro)
```
O resultado é um string JSON:
```
{"id":50,"titulo":"Primeiros Passos com NodeJS","autor":"João Rubens","categoria":"programação","versoes":["ebook","impresso"]}
```
Para fazer o processo inverso:
```js
const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)
```
O resultado é um objeto JavaScript:
```js
{
 id: 50,
 titulo: 'Primeiros Passos com NodeJS',
 autor: 'João Rubens',
 categoria: 'programação',
 versoes: [ 'ebook', 'impresso' ]
}
```

```
O processo de converter estruturas de dados em sequências de bytes ou caracteres. como no caso do JSON, é chamado de serialização (ou marshaling em algumas linguagens como Go).
```

O JSON é uma ferramenta imprescindível para o desenvolvimento web. Agora que você já sabe o que é e também sabe os métodos para acessar e percorrer objetos, já pode começar a praticar.

## 4 Prototype

### **O que é Prototype?**

O Javascript é uma linguagem baseada em protótipos. Todos os tipos de dados de dados podem ser convertidos em objetos que herdam propriedades e métodos dos protótipos dos quais foram baseados.

Saber esse detalhe é bem importante para entender como a linguagem funciona e as possibilidades que ela dá ao desenvolvedor.

No Node, esse aspecto dos protótipos ficam ocultos, pois ele não imprime as propriedades não-enumeráveis mas é possível usar o `developer tools` de algum browser como Firefox, Chrome ou Edge para ver os protótipos dos dados.

Usar o console e ver os métodos herdados por cada tipo de dados é uma forma de conhecer melhor essa linguagem.

### **Propriedades de Prototype**

Podemos criar uma função construtora para criar objetos de forma genérica.

Adotamos a palavra-chave `this` para definir as propriedades que pertence ao objetos.
```js
function Objeto(valor) {
  this.propriedade = valor
}
```

Para instanciar um objeto baseado nessa função construtora, usamos a palavra-chave `new`.
```js
const objeto = new Objeto('valor')
```

A partir disso, podemos perceber melhor o conceito de herança. No browser, se verificarmos a função construtora do objeto genérico criado, vamos chegar ao `Object` do Javascript. Se tentarmos usar qualquer método do `Object` nesse protótipo, a execução ocorrerá normalmente.
```js
objeto.hasOwnProperty('propriedade') // true
```
Não definimos o método acima no nosso objeto, mas ele existe na cadeia de protótipos do nosso objeto, logo podemos usar este método.

### **Manipulando o Prototype**

Após criar uma função construtora, podemos manipulá-la, adicionando métodos ou propriedades novas inserindo no `prototype` da classe.
```js
Cliente.prototype.metodo = function getPropriedade() {
  return this.propriedade;
}
```
Após alterar o protótipo desta maneira, qualquer instância poderá acessar o método novo.

### **Propriedades enumeráveis**

Vimos que quando um objeto JavaScript é criado ele tem propriedades particulares (por exemplo, nome, cpf ou email e também outras propriedades herdadas do protótipo.

Além do nome e do valor, cada propriedade tem também três atributos:

- Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;
- Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for...in ou utilizando `Object.keys()` / `Object.values()` / `Object.entries()`. Ou seja, se a propriedade é enumerável;
- Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.

Por definição, todas as propriedades de um objeto criadas durante o desenvolvimento têm estes três atributos como `true`. Já a maior parte das propriedades herdadas do protótipo têm estes atributos como false e não podem ser enumeradas, adicionadas ou alteradas.

```
O JavaScript utiliza o termo own property (propriedade própria) para se referir às propriedades que pertencem ao objeto (como os exemplos nome, cpf e email) e que não são herdadas do protótipo.
```

Podemos verificar os atributos de cada propriedade utilizando alguns métodos nativos do JavaScript:

```js
const catalogo = {
 "editora": "Casa do Código",
 "catalogo": [
 {
   "id": 50,
   "titulo": "Primeiros Passos com NodeJS",
   "autor": "João Rubens",
   "categoria": "programação",
   "versoes": ["ebook", "impresso"]
 }
]}
```
Usando o método `Object.getOwnPropertyDescriptor()` para descrever os atributos da propriedade editora, teremos:
```js
console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))
```
O resultado será um objeto com os quatro atributos da propriedade editora: o valor (um string ”Casa do Código”) e os três atributos que descrevemos anteriormente:
```js
{
 value: 'Casa do Código',
 writable: true,
 enumerable: true,
 configurable: true
}
```
A propriedade editora foi criada por nós e não herdada do protótipo, assim ela pode ser alterada, removida e é enumerável - ou seja, vai ser percorrida em um loop `for...in` e indexada a um array com `Object.keys()` ou `Object.entries()`.

Veja que métodos que começam com `getOwnProperty…` funcionam apenas em propriedades “próprias” do objeto.

```
Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null.
```

Protótipos e herança são temas vastos em JavaScript. A partir desta introdução, você pode praticar e se aprofundar no tema.

## 5 Orientação a Objetos

### **Conceito de OO**

Orientação a objetos é um dos paradigmas de programação mais utilizados no mundo do desenvolvimento.

Ela tem como base alguns connceitos:

- **Classes**: São modelos usados para a criação de objetos;
- **Atributos**: São características de uma classe;
- **Métodos**: Define comportamentos de uma classe.

Além disso, o paradigma OO tem outros conceitos relevantes como:
- **Herança**: É um mecanismo que permite que uma classe herde características e comportamentos de uma outra classe.
- **Objeto**: É uma instância de uma classe.

Classes passaram a existir a partir do JS ES6, antes disso, usava-se funções para emular um comportamento de classe. No fundo, a palavra reservada `class` é um `syntatic sugar` do Javascript para tornar a programação orientada a objetos mais familiar para quem vem de outras linguagens onde este conceito é nativo da linguagem, como `Java` e `C++`. Isso é tão verdade que alguns conceitos relevantes de OO em outras linguagens não estão presentes ainda o Javascript, como `Interface`.

### **Criando uma classe**
```js
class <nome da classe> {
  constructor(parametros) {
    this.<propriedade> = parametros
  }

  <nome do metodo>() {
    return this.<propriedade>
  }
}
```

### **Para saber mais: this, bind(), apply() e call()**

Você deve ter reparado na palavra-chave `this` que foi utilizada anteriormente, tanto nas funções construtoras quanto nas classes, e que significa literalmente “isso” ou “este”. Vamos ver com mais detalhes o que faz o `this` e mais três métodos que utilizamos para manipulá-lo: `call()`, `apply()` e `bind()`.

Vamos criar um objeto pessoa com propriedades nome e email, além de um método para imprimir o nome da pessoa no terminal:
```js
const pessoa = {
 nome: "Ana",
 email: "a@email.com",
 imprimeNome: function(){
   console.log(`${pessoa.nome}`)
 }
}

pessoa.imprimeNome() //Ana
```
Veja que o método `imprimeNome()` faz referência ao próprio objeto pessoa. O JavaScript tem uma forma melhor de fazer isso, que não “acopla” o método ao nome do objeto:
```js
const pessoa = {
 nome: "Ana",
 email: "a@email.com",
 imprimeNome: function(){
   console.log(`${this.nome}`)
 }
}

pessoa.imprimeNome() //Ana
```
Podemos visualizar melhor a utilização do `this` para “desacoplar” o método do objeto com um outro exemplo:
```js
function imprimeNomeEmail(){
 console.log(`nome: ${this.nome}, email ${this.email}`)
}
```
Acima temos uma função que não está ligada a nenhum objeto. Vamos ver como podemos utilizá-la para objetos diferentes de forma independente:
```js
const pessoa1 = {
  nome: "Ana",
  email: "a@email.com",
  imprimeInfo: imprimeNomeEmail
}

const pessoa2 = {
  nome: "Paula",
  email: "p@email.com",
  imprimeInfo: imprimeNomeEmail
}

pessoa1.imprimeInfo()
//nome: Ana, email a@email.com
pessoa2.imprimeInfo()
//nome: Paula, email p@email.com
```
Dentro de cada objeto, criamos um método que chama a função externa `imprimeNomeEmail()`. Essa função é executada no contexto de cada um dos objetos e o `this` faz com que ela utilize os valores de propriedade desses objetos.

O `this` representa o objeto que executa a função. Podemos dizer que a instrução passada para o JavaScript é: “execute a função aqui, utilizando este contexto”.

No caso de atributos das funções construtoras ou dos construtores de classe, o `this` tem função similar: podemos dizer que o construtor recebe os atributos deste objeto:
```js
function Pessoa(nome, email){
  this.nome =nome
  this.email =email
  this.imprimeNomeEmail = function(){
      console.log(`nome: ${this.nome}, email: ${this.email}`)
  }
}
```
Quando criarmos objetos com base nesta função construtora, os atributos que a função receber como parâmetro (nome e email) serão definidos no contexto de cada um deles:
```js
const pessoa1 = new Pessoa("Ana", "a@email.com")
const pessoa2 = new Pessoa("Paula", "p@email.com")

pessoa1.imprimeNomeEmail()
// nome: Ana, email: a@email.com
pessoa2.imprimeNomeEmail()
// nome: Paula, email: p@email.com
```
É possível manipular os valores de `this` e o JavaScript tem três métodos para isso:

<br>

### `call()`

<br>

Esse método permite que uma função seja chamada com parâmetros e valor de `this` específicos. Vamos ver um exemplo:
```js
function imprimeNomeEmail(tipoCliente){
 console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}

const cliente1 = {
 nome: "Carlos",
 email: "c@email.com"
}

const cliente2 = {
 nome: "Fred",
 email: "f@email.com"
}
```
Criamos uma função `imprimeNomeEmail` que recebe como parâmetro um dado que chamamos de `tipoCliente`. Esta função imprime no terminal um string com `tipoCliente` mais duas informações que estão associadas a algum objeto (ainda não informado) com `this`.

Vamos executar a função com `call()`:
```js
imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com
```
Como a função está sendo chamada como objeto do método `call()`, podemos especificar que o contexto de `this` em cada chamada se refere a um objeto diferente (`cliente1` e `cliente2`), sem a necessidade de adicionar a função em cada um dos objetos.

O primeiro parâmetro do método `call()` se refere ao objeto que será usado como contexto do `this` e, do segundo parâmetro em diante, são passados os argumentos que a função deve receber. No caso acima, há somente um parâmetro, a string `tipoCliente`.

<br>

### `apply()`

<br>

O método `apply()` funciona de forma muito semelhante ao `call()`, porém recebe os argumentos em um array ao invés de separados:
```js
function imprimeNomeEmail(tipoCliente, agencia){
 console.log(`
   ${tipoCliente} da agência ${agencia}:
   - nome: ${this.nome}, email: ${this.email}
   `)
}

const cliente1 = {
 nome: "Carlos",
 email: "c@email.com"
}

const cliente2 = {
 nome: "Fred",
 email: "f@email.com"
}
```

Chamando `imprimeNomeEmail` com o método `apply()` e passando um array de dados como segundo parâmetro (lembrando que o primeiro parâmetro de apply() se refere ao contexto de `this`, igual ao método call():
```js
const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com
```
Utilize o método `apply()` caso você tenha um array de dados e o `call()` para passar valores individuais como parâmetro. Lembre-se que o array deve seguir a ordem correta dos parâmetros informado na função.

<br>

### `bind()`

<br>

O método `bind()` “prende” ou “liga” uma função ao contexto de um objeto. Por exemplo:
```js
const personagem = {
  nome: "Princesa Leia",
  apresentar: function(){
    return `a personagem é ${this.nome}`
  }
}
```
O objeto acima contém uma propriedade `nome` e um método `apresentar` que retorna um string com nome; `this.nome` liga a propriedade nome ao contexto do objeto em que a função está definida, ou seja, “este objeto”.

Vamos ver o que acontece se tentarmos executar essa função a partir de outro contexto:
```js
const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined
```
Quando atribuímos `apresentar()` à variável `personagemGenerico` estamos retirando a função `apresentar()` do contexto do objeto na qual foi criada, e por isso `this` não está mais acessível; a função perdeu a referência original e não consegue mais localizar onde está `this`.

Resolvemos este problema com `bind()`:
```js
const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia
```
Acima, utilizamos o método `bind()` para “ligar” a função que atribuímos a `personagemGenerico` ao objeto `personagem`. Assim, sempre que esta função for executada a partir da variável `personagemDefinido`, a função original vai usar o objeto `personagem` como contexto de execução. Dessa forma, `this` sempre se refere ao objeto `personagem` e é capaz de acessar suas propriedades.

Estes três métodos têm uma variedade enorme de usos no dia a dia da programação com JavaScript, faça mais testes a partir dos exemplos acima para se familiarizar com os conceitos.

### **Resumo**:
- `this`: referencia a própria classe
- `call()`: passa para uma função em qual contexto ela deve ser executada
- `apply()`: semelhante ao call mas o segundo parâmetro deve ser um array de valores
- `bind()`: executa no contexto de um determinado objeto

### **Métodos e propriedades**

É possível herdar métodos e propriedades de uma classe usando a palavra-chave `extends`. Caso a classe pai tenha uma função construtora, ela deve ser invocada na classe filha, utilizando a palavra-chave `super`.