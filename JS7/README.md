# JavaScript: programação orientada a objetos

# 1. Entendendo a orientação a objetos

## O que sao paradigmas?

Abordagens sobre como resolver problemas de programação, baeadas em uma teoria ou conjunto de princípios definidos.

### Exemplos de paradigmas
- Imperativo 
  - Orientação a Objetos
  - Estruturado
- Relacional
  - Banco de dados relacionais
- Declarativo
  - Funcional

## Para saber mais:

Além do paradigma orientado a objetos, temos também outras formas de lidar e organizar os programas. Uma forma muito comum de categorizar esses paradigmas é dividi-los entre paradigmas imperativos ou declarativos.

Os paradigmas imperativos são aqueles que usam afirmações para alterar o estado de um programa, da mesma forma como o modo verbal imperativo no português expressa um comando ou ordem para ser executada. Essa categoria se preocupa com o “como” uma tarefa vai ser executada, o seu passo-a-passo e a sequência dessas etapas. Alguns dos paradigmas que se encaixam aqui são os seguintes:

- Estrutural
- Procedural
- Orientado a objetos

Um exemplo que mostra o paradigma imperativo é a implementação da seguinte função que recebe um vetor e retorna outro vetor com cada um dos valores dobrado:

```js
function dobra(vetor){
  let resultados = [];
  for (let i = 0; i < vetor.length ; i++){
    resultados.push(arr[i] * 2);
  }
  return resultados;
}
```
Podemos notar que passamos as instruções de como percorrer o vetor, qual operação fazer e o que devemos adicionar ao resultado.

Uma outra categoria de paradigma é o declarativo. Podemos dizer que uma característica dele é expressar a lógica de um processo sem descrever o seu controle de fluxo. Ou seja, é associado ao “o quê” uma tarefa vai resultar ou retornar. Um paradigma que pode se encaixar nessa categoria é o paradigma funcional.

Uma implementação declarativa do mesmo problema de dobrar os valores de um vetor pode ser feita da seguinte forma:
```js
function dobra(vetor){
  return vetor.map((item) => item * 2);
}
```

Podemos observar que não foi necessário explicitar como iterar sobre o laço de repetição ou atribuir os novos valores.

No cotidiano temos diversos outros exemplos de afirmações que podem ser consideradas declarativas, como arquivos HTML:

```html
<h1> Programação Declarativa</h1>
<p> Estou declarando como quero que o texto apareça, e não dizendo para o computador como renderizar um texto</p>
```

Ou até mesmo as queries SQL, nas quais apenas dizemos qual resultado esperamos, sem especificar como a busca deve ser feita:
```sql
SELECT * FROM Alunos WHERE Escola=’Alura’;
```

O JavaScript e algumas outras linguagens podem utilizar mais de um paradigma. É comum ouvir o termo “multiparadigma” quando nos referimos a esse tipo de linguagem, e isso traz alguns benefícios, pois permite perfis diferentes de desenvolvedores e sistemas utilizarem uma linguagem em comum.

Claro que um paradigma não é necessariamente melhor que o outro, mas dependendo das circunstâncias podemos utilizar um que seja mais otimizado para determinada aplicação. Algumas funcionalidades precisam alterar o estado de uma aplicação, não podendo ser escritas de forma declarativa, assim como os códigos declarativos que utilizamos podem ter uma implementação imperativa por baixo dos panos.

## Orientação a objetos

Princípio de espelhar o mundo real através de uma estrutura de objetos com características e ações, que interagem uns com os outros.

Para abstrair um animal, um gato, no conceito de uma classe, devemos fazer em duas partes, primeiro as características, que descrevem o objeto e a segunda, o comportamento, que define as ações que podem ser executadas pelo objeto.

O gato tem como características:
- sexo
- idade
- pelagem
- status:
  - castrado
  - vacinado
  - vermifugado

E como comportamentos:
- miar
- comer
- dormir
- limpar
- brincar
  - bolinha
  - laser
  - fita

No Javascript podemos definir esse objeto da seguinte forma, em um objeto literal:

```js
const gato = {
  // caracteristicas
  nome: "Churrumina",
  nascimento: "25/11/2018",
  pelagem: "mesclada",
  sexo: "feminino",
  status: {
    castrada: true,
    vacinada: true,
    vermifugada: true
  }
  // comportamentos
  miar: function() {
    console.log("miau")
  }
  dormir: function() {
    console.log("zzz")
  }
}
```

## Modelos de objetos
```js
const modeloGato = {
  // caracteristicas
  nome: stringNome,
  nascimento: stringData,
  pelagem: stringPelagem,
  sexo: stringSexo,
  status: {
    castrada: boolCastrado,
    vacinada: boolVacinado,
    vermifugada: boolVermifugado
  }
  // comportamentos
  miar: function() { }
  dormir: function() { }
}
```
Os modelos definem como um objeto deverá ser e se comportar. A partir de um modelo, podemos criar várias instâncias de objetos semelhantes.

## Princípios da OO
- Classe
- Objeto
- Herança
- Polimorfismo
- Encapsulamento

## Modelando o projeto

Neste curso, vamos pensar um projeto que lidaremos com usuários, e dentro desses usuários, temos alguns com características diferenciadas, que são os administradores e os docentes. Estes usuários diferenciados devem reaproveitar características e lógicas do usuários convencional como podem ter características e comportamentos individuais a cada uma.

Temos um diagrama abaixo, feito em UML (*Unified Modeling Language* ou Linguagem de Modelagem Unificada).

![classes](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/danilok/formacao-js-para-backend/main/JS7/projeto.wsd)

## Linguagem UML

Existe uma forma muito prática de ilustrar sistemas, controles de fluxo e outros comportamentos chamado UML. A UML é a Linguagem de Modelagem Unificada - do inglês Unified Modeling Language.

Ela consiste na padronização de algumas notações para facilitar o entendimento entre os times de desenvolvimento que eventualmente irão lidar com um determinado sistema.

Um dos diagramas mais comuns de ser representado utilizando a UML é o diagrama de classe. A função dele é representar as estruturas e relações entre as classes de um projeto e interfaces com outros sistemas.

Existem outras versões de diagramas de classe que incluem, por exemplo, os tipos de variáveis dos dados associados, informações sobre tipos de dados abstratos, relações de herança e composição de classes e métodos que são implementados pelas classes.

Atualmente, a [UML](https://www.uml.org/) é mantida por um consórcio internacional que regula esse padrão. Existem diversos programas disponíveis que nos permitem descrever em um código próprio um diagrama e exportar as imagens que ilustram o sistema, como o [PlantUML](https://www.uml.org/).

## Objeto Date

Durante a aula, vimos que um dos campos do objeto `User` no diagrama UML utilizava não o formato `String` ou `Number`, mas sim o formato `Date`.

| User |
| -- |
||
| nome: string |
| email: string |
| nascimento: date |
| role: string |
| ativo: bool |
||
| constructor() |
| exibirInfos() |

Vamos ver um pequeno resumo do que se trata.

Como o nome sugere, o `Date` é um objeto utilizado para trabalhar as datas e o tempo em JavaScript. No dia a dia de desenvolvimento é muito comum precisarmos utilizar a informação da data e hora para realizar alguma tarefa ou, especialmente, lidar com dados. No entanto, em JavaScript, essa mesma informação pode assumir diferentes tipos.

Vamos supor que você decida utilizar a variável `tempo` para guardar uma informação da data e, para obter o valor, você decida chamar o método `Date()` do objeto Date:

```js
let dataEHora = Date() // utilizando a chamada de função diretamente
console.log(dataEHora)
 // Mon Jan 31 2022 23:44:05 GMT-0300 (Brasilia Standard Time)
console.log(typeof dataEHora)
 // string
```
Como podemos ver, a saída da variável é a data completa (no padrão de Brasília, nesse cenário específico) e o tipo da variável `dataEHora` é `string`.

Em outro cenário, suponhamos que você decida utilizar a mesma variável dataEHora para guardar a informação da data mas, diferentemente do primeiro caso onde você chamou apenas o método `Date()` para recuperar a informação, você agora crie uma instância do objeto Date.
```js
let dataEHora = new Date() // utilizando o construtor do objeto Date
console.log(dataEHora)
 // 2022-02-01T02:46:51.517Z
console.log(typeof dataEHora)
 // object
```
A informação então recuperada é a mesma mas os tipos são diferentes. Mas qual o propósito disso?

A razão por trás desse comportamento é que, quando utilizamos um construtor, também temos acesso a todos os métodos do objeto Date. Podemos ver melhor essa diferença nos exemplos a seguir:
```js
let dataComConstrutor = new Date()
let data1 = dataComConstrutor.getDate()
console.log(data1) //31
```
Acima, utilizamos o método getDate(), que já existe em qualquer objeto criado a partir de Date(), para obter o dia do mês.
```js
let dataFuncao = Date()
let data2 = dataFuncao.getDate()
 //TypeError: dataFuncao.getDate is not a function
```
Já no exemplo acima, vemos que uma data gerada através da chamada da função `Date()` diretamente não pode acessar os demais métodos do objeto `Date`, ao passo que ao gerarmos uma nova instância desse objeto é possível acessar todos os métodos definidos dentro deste objeto, como por exemplo `getDate()`.

Alguns exemplos de outros métodos disponíveis no objeto Date são:

- `.getMillisseconds()`
- `.getSeconds()`
- `.getMinutes()`
- `.getHours()`
- `.getDay()`
- `.getMonth()`
- `.getFullYear()`

Em seguida vamos estudar mais sobre o `new`, funções construtoras e métodos de objetos. Porém você pode sempre acessar a [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date) e testar os vários formatos de data possíveis.

## Resumo
Nessa aula, você aprendeu:
- Qual é a motivação e a base conceitual da programação orientada a objetos, que é abstrair modelos a partir de conceitos da vida real e estruturar a forma como o programa é desenvolvido a partir destes modelos;
- Quais são as características de um objeto literal: um tipo de dado composto de pares de chave/valor, com valores que podem ser tanto dados primitivos quanto arrays e outros objetos (também chamados de propriedades) e funções que dão comportamento ao objeto (também chamados de métodos);
- Sobre o princípio de usar modelos (ou classes) para criar cópias (ou instâncias) de um objeto e como isso ajuda a reaproveitar código;
- A estrutura e os conceitos por trás do UML (Linguagem de Modelagem Unificada), linguagem que oferece uma série de ferramentas e padrões para definirmos as classes de um sistema, quais métodos serão necessários e quais seus desdobramentos.

# 2. Funções e protótipos

## OO com Javascript

```js
const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "admin",
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email)
  }
}
```

## Entendendo o this

A palavra reservada `this` é bem importante no Javascript e entender sua utilização é fundamental. Ela é muito dependente do contexto em que é utilizada. E ela é muito utilizada em desenvolvimentos que utilizam classes.

Veja o exemplo a seguir, os comentários exibem a saída da execução da respectiva instrução.

```js
const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "admin",
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email)
  }
}

user.exibirInfos() // Juliana j@j.com

const exibir = function() {
  console.log(this.nome)
}
exibir() // undefined

const exibirNome = exibir.bind(user)
exibirNome() // Juliana

```

Quando a linha `user.exibirInfos()` é executada, a função é executada e são impressos os valores nome e email, estes que foram definidos no objeto literal `user`. Dentro do contexto do objeto literal, temos as propriedades `nome`e `email` e elas são impressas como esperado. Esta é a utilização convencional para qualquer função definida e associado a um objeto.

Quando a linha `exibir()` é executada, a função anônima é executada e apenas `undefined` é impresso. Esse é o esperado, pois dentro do contexto da função anônima, não existe uma propriedade `nome` para ser impressa.

E como poderíamos fazer para que a função `exibir()` imprimisse um valor? As funções tem um método chamado `bind()` cujo argumento aceito é um contexto, ou em outras palavras, um objeto. Ao associar um contexto à função, ao executar esta função, ela buscará dentro do contexto informado, os valores pedidos para ser impresso. Na execução da linha `const exibirNome = exibir.bind(user)`, estamos associando à constante `exibirNome` a função `exibir` e ligando a esta função, o contexto do objeto `user`. Na linha `exibirNome()`, ao executar a função, como agora dentro do objeto `user` informado no `bind` tem a propriedade `nome`, será impresso o valor da propriedade e não mais `undefined`.

## call e apply

Durante as aulas usamos `bind()` para ligar (*bind*) o valor de `this` a um determinado contexto. Existem outros dois métodos para manipular o contexto de `this`:

### call()

O método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do this. Ou seja, é possível atribuir um this diferente do contexto atual ao executar a função.

Um exemplo de uso de call() para especificar o contexto de this:

```js
function exibeInfos() {
 console.log(this.nome, this.email)
}

const user = {
 nome: 'Mariana',
 email: 'm@m.com'
}

exibeInfos.call(user)
```

Fazendo com que a função seja executada em determinado contexto, mesmo após ser instanciada:

```js
function User(nome, email) {
 this.nome = nome
 this.email = email

 this.exibeInfos = function(){
   console.log(this.nome, this.email)
 }
}

const newUser = new User('mariana', 'm@m.com')
```

```js
const outroUser = {
 nome: 'Rodrigo',
 email: 'r@r.com'
}

newUser.exibeInfos() //mariana m@m.com
newUser.exibeInfos.call(outroUser) //Rodrigo r@r.com
```

Também é possível passar parâmetros para call(), como no exemplo a seguir.

Temos uma função que monta uma determinada mensagem a partir dos parâmetros nome e email. Se quiséssemos vincular os dados da mensagem a um objeto com dados de usuários, podemos usar call() passando como primeiro parâmetro o contexto a ser considerado como this (no caso, objeto user) e a partir do segundo parâmetro definimos quais os argumentos.

```js
function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`)
}

const user = {
 nome: 'Mariana',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.call(user, this.nome, this.email)
 }
}

user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com
```

Nesse caso, a função que será executada também está sendo passada como parâmetro de executaFuncao e usamos call() para “chamar” a função com um contexto (this) específico e também argumentos específicos.

### apply()

O método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array:

```js
function exibeMensagem(nome, email) {
 console.log(`usuário: ${nome}, email ${email}`)
}
const user = {
 nome: 'Mariana',
 email: 'm@m.com',
 executaFuncao: function(fn) {
   fn.apply(user, [this.nome, this.email])
 }
}
 user.executaFuncao(exibeMensagem) //usuário: Mariana, email m@m.com
```

Usando arrays, é possível passar os argumentos via variável ou até mesmo usando a propriedade arguments que existe internamente em todo objeto.

## Function vs Arrow Function

Durante a aula, usamos sempre a sintaxe de criação de funções usando a palavra-chave function, apesar do JavaScript ter uma outra forma, mais curta e considerada mais “moderna” de se criar funções, a “arrow function” =>.

Então por que não utilizamos essa versão na criação dos nossos métodos?

Em um primeiro momento, todas as três formas de criação de função parecem funcionar de forma bem similar. Porém, a arrow function difere da function usual em alguns pontos, sendo o mais importante para nós nesse momento a questão do this.

```
Caso você precise relembrar como funcionam as três formas de se escrever funções em JavaScript, veja o tópico seguinte deste texto, “Relembrando os tipos de função” (logo abaixo).
```

A primeira diferença entre a declaração de função e as expressões de função é o hoisting. Mas, além do hoisting, existe outra diferença principal entre declaração de função e arrow function: ao contrário das funções normais, arrow functions herdam automaticamente o contexto de onde foram criadas e não têm seu próprio “contexto de invocação”. Ou seja, não podem ser ligadas a contextos específicos com this e nem fazer uso dos métodos bind(), call() e apply().

Arrow functions também não possuem a propriedade prototype e por isso não podem ser usadas como funções construtoras - assunto que veremos em seguida. Por este motivo, não usamos arrow functions em nenhum momento para a criação de métodos durante o curso.

Agradecemos ao aluno Rodolpho, que respondeu a essa dúvida sobre arrow functions no nosso fórum e nos deu a ideia de acrescentar este conteúdo.

Você pode consultar o MDN para saber mais sobre arrow functions.

Relembrando os tipos de função
A primeira versão, mais “clássica” e muito parecida com outras linguagens:

```js
function soma(num1, num2) {
 return num1 + num2;
}
```

É a chamada “declaração de função”.

A segunda forma atribui a função a uma variável, funcionalidade que já não é tão comum em outras linguagens:

```js
const soma = function(num1, num2) {
 return num1 + num2;
}
```
Chamamos essa forma de “expressão de função”.

A terceira e última forma é a arrow function ou “função de seta”, caracterizada pelo operador =>:

```js
const soma = (num1, num2) => {
 return num1 + num2;
}
```

Ou, no caso de blocos de código com apenas uma linha, podemos omitir o return e as chaves {}:

```js
const soma = (num1, num2) => num1 + num2;
```
Bem mais curto! A arrow function também é uma expressão de função.

E quais são as diferenças entre elas, além do this?

A primeira diferença é um pouco mais teórica. Funções criadas como declaração recebem um identificador (ou seja, um nome), e funções criadas como expressão são consideradas anônimas - estas funções são atribuídas a variáveis e é através dessas variáveis que conseguimos chamá-las e executá-las.

Na prática, a diferença se dá no contexto do carregamento do código. Declarações de função têm seu código lido antes da execução de qualquer instrução, pois o interpretador “puxa” para as primeiras linhas do arquivo todas as variáveis e todas as declarações de função, deixando seus códigos e dados “carregados” para aí sim começar a executar os códigos. A esta ação se dá o nome de "hoisting", algo como “içar”, pois as funções e variáveis são “içadas” para o topo do arquivo e lidas primeiro.

Já as expressões de função, que são anônimas, não passam pelo processo de hoisting e têm seu conteúdo interpretado apenas no momento da execução. Assim, o interpretador (seja o Node.js ou um navegador) não consegue executar a função sem ter lido seu conteúdo antes.

Por exemplo, o código abaixo (uma declaração de função) executa normalmente:

```js
console.log(soma(1, 1)) //2

//é possível executar a função antes de declará-la no código
function soma(num1, num2) {
  return num1 + num2;
}
```
Porém o código abaixo (uma expressão de função) não executa:

```js
console.log(soma(1, 1)) //erro

//ReferenceError: Cannot access 'soma' before initialization
const soma = function(num1, num2) {
  return num1 + num2;
}
```
O mesmo erro acima ocorreria com uma arrow function. Faça o teste!

Agora que já relembramos os tipos de função e suas diferenças, podemos seguir em frente.

## Herança de protótipo

```js
const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email)
  }
}

const admin = {
  nome: "Mariana",
  email: "m@m.com",
  nascimento: "2021/01/01",
  role: "admin",
  ativo: true,
  criarCurso: function() {
    console.log('curso criado!')
  }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso() // curso criado!
admin.exibirInfos() // Mariana m@m.com
```

O Javascript não é uma linguagem orientada a objetos em sua concepção. A orientação a objetos com classes está mais para um `syntax sugar` do que uma implementação nativa da linguagem. A forma que o Javascript usa para simular a orientação a objetos é a **herança de protótipos**.

Todo objeto criado no Javascript herdará do protótipo `Object`. Para este primeiro momento, usando objetos literais. Podemos herdar um objeto ao atribuir um protótipo a ele utilizando o método `Object.setPrototypeOf(objetoDestino, objetoOrigem)`. Desta forma, o `objetoDestino` terá as mesmas características e comportamentos do `objetoOrigem` além das suas próprias.

## Cadeia de protótipo

Para ilustrar melhor a cadeia de protótipos, é melhor utilizar o console em um navegador, que é o `runtime` original do Javascript. No navegador, serão impressas informações adicionais que são omitidas no `Node`.

```js
{nome: 'Juliana', email: 'j@j.com', nascimento: '2021/01/01', role: 'estudante', ativo: true, …}
ativo: true
email: "j@j.com"
exibirInfos: ƒ ()
nascimento: "2021/01/01"
nome: "Juliana"
role: "estudante"
[[Prototype]]: Object
```

No navegador, podemos ver que um objeto tem uma propriedade `__proto__`.

```js
admin.__proto__
{nome: 'Juliana', email: 'j@j.com', nascimento: '2021/01/01', role: 'estudante', ativo: true, …}
ativo: true
email: "j@j.com"
exibirInfos: ƒ ()
nascimento: "2021/01/01"
nome: "Juliana"
role: "estudante"
[[Prototype]]: Object

user.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
```
Pelo tipo do `constructor` podemos saber qual a herança do objeto `user`, no caso, `Object`.

Outro ponto que podemos visualizar no navegador é a cadeia de protótipos.

```js
> admin.__proto__
{nome: 'Juliana', email: 'j@j.com', nascimento: '2021/01/01', role: 'estudante', ativo: true, …}
> admin.__proto__.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
> admin.__proto__.__proto__.__proto__
null
```

Ao chegar no último nível da cadeia de protótipos, `null` é retornado, sinalizando que chegou ao último nível da cadeia.

## __proto__ vs prototype

Durante nossos estudos de JavaScript é normal toparmos com os protótipos de duas formas diferentes, através da propriedade `__proto__` ou do objeto `prototype` que vemos em todos os objetos. Afinal, qual a diferença e quando se usa cada um deles?

Para entender melhor essa diferença, vamos testar alguns códigos:

```js
let user = {
 perfil: 'estudante'
}

let estudante = {
 nome: 'juliana'
}

Object.setPrototypeOf(estudante, user)
```

No trecho acima, definimos dois objetos, com propriedades diferentes, e estabelecemos que o objeto `user` será usado como protótipo para o objeto `estudante`. Podemos testar esse código direto no terminal:

```js
console.log(estudante.nome) // 'juliana'
console.log(estudante.perfil) //'estudante'
```

Ou seja, o objeto `estudante`, além da propriedade `nome`, também tem a propriedade `perfil`, trazida do protótipo `user`.

É possível acessar `__proto__` de `estudante`, porém, para isso, devemos copiar o código acima e executá-lo no console do navegador, pois o módulo `console` do NodeJS funciona de uma forma um pouco diferente e não vai acessar essa propriedade.

```js
> let user = {
 perfil: 'estudante'
}

let estudante = {
 nome: 'juliana'
}

Object.setPrototypeOf(estudante, user)
< {nome: 'juliana'}

> estudante.__proto__
< {perfil: 'estudante'}
```

Se adicionarmos mais uma propriedade ao objeto user, essa propriedade entrará também como protótipo do objeto estudante:

```js
> user.ativo = true
< true

> estudante.__proto__
< {perfil: 'estudante', ativo: true}
```

Quando usamos objetos e funções para trabalhar com orientação a objetos com JavaScript, os objetos criados não são instâncias diferentes (ou seja, cópias do objeto-base) e sim **referências** a um mesmo objeto que está sendo delegado aos objetos que o usam como protótipo.

Agora vamos ver outro exemplo, dessa vez utilizando `new` para criar um novo objeto:

```js
function User() {}
User.prototype.perfil = 'estudante'
let estudante = new User()
```

Testando no próprio terminal:

```js
console.log(estudante.perfil) //'estudante'
```

No caso acima, a palavra-chave `new` vai criar um novo objeto simples e definir, na propriedade `prototype` desse objeto recém criado, as propriedades de protótipo que encontrar em `User`. O `prototype` é criado automaticamente e existe como propriedade apenas em funções, para quando queremos usar determinada função como construtor usando new.

Vamos fazer um último teste, copiando a função User() criada acima e executando no console do navegador:

```js
> function User() {}
User.prototype.perfil = 'estudante'
let estudante = new User()
< 'estudante'

> console.log(estudante.perfil)
< estudante
```

Se tentarmos acessar as propriedades `prototype` e `__proto__` de estudante, obtemos os seguintes retornos:

```js
> estudante.__proto__
< {perfil: 'estudante', constructor: ƒ}

> estudante.prototype 
< undefined

> User.prototype
< {perfil: 'estudante', constructor: ƒ}
```

Em resumo:

```
__proto__ é uma propriedade que todos os objetos têm e que aponta para o protótipo que foi definido para aquele objeto.
```

```
prototype é uma propriedade da função que é definida como protótipo quando usamos new para criar novos objetos.
```

Você também pode ter notado que alguns objetos também possuem uma propriedade chamada `[[Prototype]]`. Esta é uma propriedade interna que cada **instância** de um objeto possui, e que aponta (como um ponteiro) para a propriedade `prototype` da função que está sendo usada como protótipo. Quando criamos um novo objeto usando `new`, a propriedade `prototype` do construtor (como vimos acima) é “linkada” à essa propriedade `[[Prototype]]` da nova instância criada.

Existem diversos métodos internos do JavaScript para verificar as propriedades de um construtor e também das instâncias criadas através dele. Você pode conferir a lista na [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object).

## um resumo sobre protótipos

Vimos vários aspectos da herança de protótipos durante a aula, vamos resumir alguns deles aqui e colocar alguns pontos extras:

### Protótipo vs `prototype`
Praticamente todos os dados criados em JavaScript (objetos, arrays, etc) têm um protótipo, porém apenas alguns deles têm a propriedade `prototype`. São estes objetos que contêm a propriedade `prototype` que acessamos com `Object.prototype`, `Array.prototype` e etc durante o vídeo, que definem os protótipos para todos os outros acima na cadeia.

Ou seja, todos os objetos criados a partir de `Object`, `Array`, `String`, etc, têm um protótipo que foi “herdado” destes, mas não necessariamente têm uma propriedade `prototype`.

### Cópia vs referência
Os métodos e propriedades **não** são copiados de um objeto para outro na cadeia de protótipos - eles são acessados pelo interpretador ao percorrer a cadeia e os métodos executados de acordo com o `this`, ou seja, o contexto em que o método foi executado.

### `__proto__` será descontinuado
O uso de `__proto__` durante a aula é só para dar exemplo e acessar a cadeia de protótipos. Esta é uma propriedade “assessor” que serve para “expor” o protótipo dos objetos e está em processo de ser descontinuada. Você pode ler mais sobre esta propriedade na documentação do MDN.

### Não altere o `prototype`
Não é recomendável alterar diretamente o `prototype`, pois alterar diretamente as regras de herança de qualquer objeto afeta a performance do código em qualquer interpretador, seja o NodeJS ou navegadores. Vamos ver como criar objetos de acordo com as boas práticas do JavaScript em seguida.

### Cuidado com a performance
Todas as propriedades de uma cadeia de protótipos são enumeradas e o tempo que o interpretador leva para pesquisar uma propriedade, desde o nível mais alto na cadeia, pode ser longo e impactar o desempenho. Além disso, se o código tentar acessar uma propriedade não existente, vai percorrer toda a cadeia durante a busca. Assim, não é uma boa prática criar longas cadeias de protótipos.

## `Object.create()` vs `new`

Todas as seguintes formas são jeitos diferentes para criar um novo objeto, hoje são métodos que não usadas normalmente, mas serve de conhecimento caso veja em algum código.

```js
function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function() {
    return `${this.nome} ${this.email}`;
  }
}

const novoUser = new User('Juliana', 'j@j.com');
console.log(novoUser.exibirInfos());
console.log(novoUser.prototype)
console.log(novoUser.__proto__)

function Admin(role) {
  User.call(this, 'Juliana', 'j@j.com')
  this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoAdmin = new Admin('admin')
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.role);

const user = {
  exibirInfos: function(nome) {
    return nome;
  }
}

const novoUser2 = Object.create(user);
console.log(novoUser2.exibirInfos('Juliana'));
console.log(user.isPrototypeOf(novoUser2));

const user2 = {
  init: function(nome, email) {
    this.nome = nome;
    this.email = email;
  },
  exibirInfos: function() {
    return this.nome;
  }
}

const novoUser3 = Object.create(user2);
novoUser3.init('Juliana', 'j@j.com')
console.log(novoUser3.exibirInfos());
```

## factory functions

Uma *factory function* (“função fábrica”) é como chamamos, em JavaScript, uma função que retorna um objeto.

Exemplo de *factory function*:

```js
function criaUser(nome, email) {
 return {
   nome,
   email,
   exibeInfos() {
     return `${nome}, ${email}`
   }
 }
}
```

Veja que, um pouco diferente do que foi feito na aula, não se trata de um objeto literal mas sim uma função que **retorna** (através da palavra-chave `return`) um objeto.

A função acima, quando executada com os parâmetros necessário, vai retornar um objeto com duas propriedades (`nome` e `email`) e um método interno (`exibeInfos()`):

```js
const newUser = criaUser('Rodrigo', 'r@r.com')
console.log(newUser)
console.log(newUser.exibeInfos())
```

O retorno esperado no terminal:

```js
{
  nome: 'Rodrigo',
  email: 'r@r.com',
  exibeInfos: [Function: exibeInfos]
}

Rodrigo, r@r.com
```

As *factory functions* são diferentes das funções construtoras. Veja um exemplo de função construtora, como fizemos anteriormente durante a aula:

```js
function User(nome, email) {
 this.nome = nome
 this.email = email

 this.exibeInfos() {
   return `${nome}, ${email}`
 }
}
```

As funções construtoras devem ser chamadas com o operador `new` para criar instâncias do objeto `User`:

```js
const newUser = new User('Mariana', 'm@m.com')
console.log(newUser)
console.log(newUser.exibeInfos())
```

O retorno no console é praticamente o mesmo, com exceção que agora `exibeInfos()` é uma função anônima e o objeto é explicitamente uma instância de `User`:

```js
User {
  nome: 'Mariana',
  email: 'm@m.com',
  exibeInfos: [Function (anonymous)]
}

Mariana, m@m.com
```

No caso da *factory function* não há perda de contexto na execução dos métodos internos.

Quais as diferenças e qual devo usar?

Não há consenso, pois ambas têm vantagens e desvantagens. A sintaxe da função construtora é mais confortável para quem está acostumado com o uso de classes; já a *factory function* é mais flexível a respeito do tipo de objeto que será retornado.

Boa parte dos frameworks e bibliotecas do NodeJS vão trabalhar com classes ou construtores, instanciados com new.

## O que aprendemos?

- O que é a palavra-chave `this` e sua importância na manipulação de objetos com JavaScript, uma vez que o `this` representa o contexto em que determinada função ou método será executada, e como este contexto pode ser identificado e modificado utilizando os métodos `bind()`, `call()` e `apply()`;
- Como funciona a criação de objetos em JavaScript com o modelo de protótipo, que é a forma nativa do JavaScript trabalhar com o conceito de orientação a objetos conhecido como “herança”, quando objetos recebem propriedades e métodos de outros;
- Como acessar as propriedades `prototype` e `__proto__` e, através delas, identificar a cadeia de protótipos desde o nível mais baixo, normalmente um objeto do próprio tipo de dado, como `Object` ou `Function`;
- As duas formas (anteriores às classes) que o JavaScript utiliza para criação de objetos a partir de modelos: `Object.create()` e funções construtoras com `new`; sendo o primeiro mais indicado para se trabalhar com protótipos utilizando as melhores práticas e o segundo mais próximo à sintaxe de classes.

# 3. Classes e herança

## Estrutura da classe

Usamos a palavra-chave `class` para definir uma classe. As classes geralmente tem uma função construtora chamada `constructor` que inicializa as propriedades da classe. Os métodos da classe não são ser precedidas pela palavra-chave `function` e eles sempre devem possuir um nome. Nas classes, caso alguma propriedade interna seja usada nos métodos, usa-se o `this` para indiciar esse acesso às propriedades da classe. A criação de uma nova instância da classe é usando o operador `new`.

```js
class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || 'estudante'
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome} ${this.email}`;
  }
}

const novoUser = new User('Juliana', 'j@j.com', '2020-01-01');
console.log(novoUser);
console.log(novoUser.exibirInfos());
console.log(User.prototype.isPrototypeOf(novoUser)); //true
```

## Herança de classe
 
Para poder trabalhar com herança de classe e poder organizar melhor o código, vamos fazer a utilização de módulos no Javascript. Para isso, primeiro temos que configurar nosso projeto para que o mesmo entenda que vamos utilizar módulos. 

Para isso vamos inicializar o projeto com `npm init -y` e no arquivo `package.json` adicionar uma linha com a seguinte informação `"type": "module",`. Com esta configuração, poderemos utilizar os comandos `import` e `export` nos arquivos do projeto.

A classe `User` anteriormente desenvolvida vamos exportá-la para poder utilizar em outros arquivos.

Vamos criar uma classe `Admin` agora que herdará propriedades e métodos existentes na classe `User`. 
No arquivo `Admin.js`, vamos importar a classe `User` exportada no arquivo `User.js`. Para que a classe `Admin` herde a classe `User`, temos que usar a palavra-chave `extends`. Outro detalhe, no método `constructor` da subclasse, no caso `Admin`, temos que usar a chamada `super` que chamará o método construtor da superclasse, no caso `User`.

```js
import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin') {
    super(nome, email, nascimento, role)
  }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2019-01-01');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
```

## Adicionando métodos

As subclasses podem ter seus próprios métodos, para isso é só definir novos métodos normalmente. Esses métodos poderão ser chamados pela classe mas não pelas superclasses.

Para exemplificar, a classe `Docente` que herda a classe `User` abaixo, tem um método específico dela chamada `aprovaEstudante`.

```js
import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente') {
    super(nome, email, nascimento);
  }

  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} passou no curso ${curso}`;
  }
}

const novoDocente = new Docente('Diogo', 'd@d.com', '2011-01-03');
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'));
```

## Scrict Mode

O modo estrito do JavaScript serve para impedir que alguns comportamentos do JavaScript causem “falhas silenciosas” (transformando em erros que são lançados pelo interpretador) e corrigir alguns outros que podem induzir a bugs potenciais e comportamentos inesperados.

JavaScript é uma linguagem que não tem breaking changes. Ou seja, não é possível corrigir certos comportamentos não desejados retirando o código das novas versões, pois há o risco de quebrar código que já está rodando em sites e aplicações na internet. O modo estrito é uma forma de ajudar a contornar alguns destes comportamentos sem que o código “não estrito” deixe de funcionar.

Para saber mais sobre o scrict mode do JavaScript e por que ele existe, você pode conferir na [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode).

## Métodos estáticos

Quando criamos uma classe, é possível designar que determinados métodos sejam **estáticos**. Ou seja, estes métodos não são inicializados quando criamos uma nova instância de classe (usando `new`), mas sim a partir da própria classe.

Por exemplo:

```js
class User {
 constructor(nome, email, cpf) {
  this.nome = nome
  this.email = email
  this.cpf = cpf
}
exibirInfos() {
  return `${this.nome}, ${this.email}, ${this.cpf}`
}
}
```

No exemplo acima, o método `exibirInfos()` não é um método estático, e só é possível executá-lo a partir de uma instância da classe `User`:

```js
const novoUser = new User('Carol', 'c@c.com', '12312312312')
console.log(novoUser.exibirInfos()) //Carol, c@c.com, 12312312312
```

Se tentarmos executar o método sem associá-lo a nenhuma instância da classe, recebemos um erro:

```js
console.log(User.exibirInfos())
  //TypeError: User.exibirInfos is not a function
```

Agora vamos refatorar a classe, declarando `exibirInfos()` como sendo um método estático:

```js
class User {
  constructor(nome, email, cpf) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
  }
  static exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.cpf}`
  }
}
```
Ao executarmos, recebemos o seguinte retorno:

```js
console.log(User.exibirInfos())
  //undefined, undefined, undefined
```

Não recebemos mais um erro, pois agora o método é `static` e é executado a partir da própria classe, e não de uma instância dela. Porém, como o método depende de informações recebidas do construtor e isso não ocorreu (uma vez que não criamos uma instância e nem passamos os dados necessários), recebemos `undefined` para cada propriedade.

Vamos fazer mais um teste:

```js
class User {
  constructor() {
    this.nome = 'Camila'
    this.email = 'c@c.com'
    this.cpf = '12312312312'
  }
  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.cpf}`
  }

  static exibeNome(nome) {
    return nome
  }
}
```

Mantivemos o método `exibirInfos()` como estava e criamos um novo método, estático, chamado `exibeNome()`. Porém, já vimos que métodos estáticos não podem ser executados a partir de uma instância, então como isso vai funcionar?

```js
const novoUser = new User('Carol', 'c@c.com', '12312312312')
const nomeUser = novoUser.nome
console.log(User.exibeNome(nomeUser)) //Camila
```

Criamos uma nova instância de `User` e agora temos acesso à propriedade `nome` desta instância, que estamos chamando de `novoUser`. Agora podemos atribuir a propriedade `novouser.nome` à uma variável (que chamamos de `nomeUser`) e passar o valor dessa variável como parâmetro para a chamada do método estático `User.exibeNome()`.

Na realidade, como `exibeNome()` é um método estático, é possível executá-lo passando qualquer nome como parâmetro:

```js
console.log(User.exibeNome('Jaqueline')) //Jaqueline
```

Os métodos estáticos são normalmente utilizados para chamadas de métodos internos de frameworks e bibliotecas, ou em qualquer caso que a classe não dependa de instâncias específicas.

Você pode ver mais sobre esse assunto, com mais exemplos, na [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/static).

## O que aprendemos?

- O que são e como funcionam as classes, elementos essenciais para se trabalhar com orientação a objetos em grande parte das linguagens de programação voltadas para este paradigma. As classes fornecem um modelo para a criação de cópias (instâncias) de objetos que compartilham dos mesmos tipos de propriedades e métodos;
- O conceito de herança de classe, também importante para se trabalhar com orientação a objetos, como criar subclasses que herdam propriedades e métodos de uma superclasse e como reaproveitar estas propriedades e métodos da superclasse através da função `super()`;
- Como uma subclasse pode ter propriedades e métodos próprios, além dos recebidos da superclasse, e como declarar isso no código criando novos métodos;
- A praticar a sintaxe de classe com JavaScript, criando classes, subclasses, propriedades, construtores e métodos.