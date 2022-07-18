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
