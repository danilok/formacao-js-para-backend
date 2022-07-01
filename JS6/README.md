# NodeJS: criando sua biblioteca

# 1. Criando um projeto NodeJS

Objetivo: testar os links em um arquivo markdown.

- Inicializar um projeto
```bash
npm init -y
```

## Npm x Yarn

O NPM e o YARN têm algumas pequenas diferenças nos comandos e na forma como lidam com os pacotes. Você pode ler a documentação do NPM e do YARN para ter mais informações sobre como os comandos funcionam em cada um.

## Instalação local x global

Estes pacotes de código podem ser instalados localmente, estando disponíveis somente para o projeto no qual foi instalado através da pasta node_modules, e globalmente, sendo instalados em um diretório geral do NPM e ficando disponíveis para todos os projetos em seu computador, sem a necessidade de instalar separadamente em cada projeto.


## Formato markdown

O formato Markdown, com extensão .md, é uma linguagem de marcação para a escrita de textos com marcadores simples de formatação que são convertidos em HTML.

## Instalando dependências

Para instalar um pacote, digitar o comando:
```
npm install <nome do pacote>
```

Todos os arquivos baixados são armazenados na pasta `node_modules` criado após a primeira instalação de dependências.

Esta pasta tende a ficar grande e não há necessidade de mantê-la no repositório.

O ideal é colocar esta pasta na lista de arquivos ignorados pelo sistema gerenciador de versão.

No caso deste projeto, criamos um arquivo `.gitignore`e adicionamos o `node_modules` no conteúdo do arquivo.

## O arquivo `package.json`

Este arquivo contém informações sobre o pacote/projeto, como nome, versão, dependências, scripts e mais.

## ESM vs CJS

- O sistema CJS (CommonJS) foi desenvolvido para funcionar como o sistema de exportação/importação de módulos do NodeJS.
- O ESM (EcmaScript Modules) foi desenvolvido para que o JavaScript tivesse nativamente seu próprio sistema de módulos - estamos falando do JavaScript interpretado nos navegadores.
- O NodeJS implementou o suporte ao ESM a partir da versão 13.

# 2. Carregamento de arquivos

Usando a função `fs` do próprio node.

## Tratamento de erros

Para disparar um erro, usar a palavra-chave `throw`.

## Promessas

Promessas ou `promises` é uma das formas no Javascript de tratar execuções assíncronas. Esse tipo de execução acontece quando não temos como saber quanto tempo um processamento vai ser encerrado como leitura de arquivo, requisição a uma API, etc. 

Assim que uma promise terminar de ser executada, é possível obter o resultado da execução usando o método `then()` e para tratar qualquer erro durante a execução da promise, usa-se o método `catch()`.

## Para saber mais: Promessas com .then() vs async/await

Para entender melhor as diferenças e como utilizar cada uma delas, temos este artigo no blog da [Alura](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar).

## Para saber mais: O construtor new Promise()

```
function promessa(bool) {
 const x = bool;
 return new Promise((resolve, reject) => {
   if (!x) {
     reject(new Error("falha na promessa"));
   }
   resolve("sucesso na promessa");
 });
}

function exibeResposta(textoResult) {
 console.log(textoResult);
}

promessa(true)
 .then((texto) => exibeResposta(texto))
// sucesso na promessa
```

Concluindo, sempre temos que ter em mente os estados possíveis de qualquer promessa em JavaScript:

1. Promessas podem ser concluídas de duas formas: fulfilled (realizada, completa) ou rejected (rejeitada), o que equivale a duas situações possíveis, ou a promessa se concretizou (retornou os dados ou executou o código que deveria) ou não.
2. Promessas que não estão fulfilled nem rejected estão pending (pendentes). Ou seja, ainda não é possível saber o resultado final porque o processamento ainda não foi concluído.
3. Após a finalização do processamento, a promessa passa para o estado de settled (concluída), independente do resultado.
4. Uma vez que a promessa está settled seu resultado não se altera mais. Ou seja, uma promessa que se concluiu como rejected não muda mais para o estado de fulfilled e vice-versa.

## async/await

Forma mais parecida para codificar um código assíncrono como síncrono. A função assíncrona precisa ter a palavra-chave `async` em sua declaração e qualquer método assíncrono no corpo desta função deve ser precedido pela palavra-chave `await`. Caso ela retorne algum valor, o resultado da função pode ser atribuido à variáveis. Neste contexto, os erros são capturados usando o bloco `try-catch`.

Ainda existe um último bloco, o finally, que é executado sempre, independentemente da execução do código ter sido resolvida no try ou gerado um erro passado para o catch. Tanto catch quanto finally são opcionais, mas o try deve sempre estar acompanhado de um ou outro.

Ao contrário do catch, o finally não recebe nenhum dado através dos parênteses ( ).

# 3. Capturando Links

## Expressões regulares

Como vimos nesta aula, expressões regulares são objetos que mapeiam padrões de texto por meio de uma linguagem própria, com sintaxe e regras específicas. Elas são uma ferramenta eficiente para resolver problemas de código que envolvem padrões e buscas textuais.

Pode ser que você já conheça alguns dos **meta-chars** usados em expressões regulares sem saber. Por exemplo, quando procuramos no campo de busca do computador por qualquer arquivo de extensão `jpg` com `*.jpg`. É claro que as expressões regulares podem ir de muito simples até extremamente complexas, então você não precisa se preocupar em decorar todos os meta-chars ou como eles se comportam; sempre é possível consultar sites como [regex101](https://regex101.com/) ou o guia do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions).

Cada linguagem de programação desenvolve seu próprio interpretador de expressões regulares; no caso do JavaScript podemos usar `//` e salvar o padrão em uma variável ou utilizar o construtor `new RegExp()`:
```js
const regex = /[a-zA-z\s]/;
```
ou
```js
let regex = new RegExp("[a-zA-z\s]");
```
Para trabalhar com as regex em nosso código, podemos utilizar alguns métodos próprios de string, como `match()` (que usamos no vídeo), `search()`, `replace()`, `matchAll()` e `split()`. Você pode consultar mais sobre estes métodos no MDN. Além disso, o JavaScript também tem alguns métodos próprios do objeto `RegExp`: `test()` e `exec()`. Para saber [mais](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

## Classes e grupos

Classes nas expressões regulares são definidas por `[]` grupos com `()`.
Classes contém as regras para o match, como só números, letras, sequência de caracteres.
Os grupos é um subconjunto de caracteres que fazem parte do match, que podem ser utilizados de forma independente do match completo. Por exemplo, 

## Capturando grupos

Além do match da expressão, caso sejam definidos grupos (com `()`), eles também serão retornados no resultado da expressão. Os grupos permitem usar partes do match de forma independente do match completo.

Exemplo de um resultado restornado, que é um array:
```js
[
  '[FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList)',
  'FileList',
  'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
  index: 49,
  input: 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)',
  groups: undefined
]
```
A primeira posição refere-se ao match completo, os itens seguintes referem-se aos grupos encontrados.
O `index` é a posição do match dentro do input.
O `input` é a string testada.

## Validações de formulários

Validações são importantes tanto no lado do front-end quanto do back-end. Você pode conferir duas libs para isso, [Joi](https://joi.dev/) e [Yup](https://www.npmjs.com/package/yup), e suas documentações com exemplos de uso. A Joi tem um [ambiente de testes](https://joi.dev/tester/) que ajudam a visualizar melhor como utilizar os métodos dessa lib.

## Retornando links

Ao usar o método de expressão regular `exec()`, a expressão regular somente será testada uma vez, caso seja necessário testar a mesma expressão múltiplas vezes em uma mesma string, é necessário usar um laço de repetição.
```js
  while( (regex.exec(texto)) !== null) {
    ...
  }
```