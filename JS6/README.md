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

# 4. Usando a linha de comando

## Executando comandos

O arquivo `index.js` contém o código do processamento para extração de links de um arquivo, mas para um usuário do nosso pacote, executar `index.js` nem sempre será nossa melhor opção.

Para facilitar a execução do processamento, vamos organizar melhor o pacote. O arquivo `index.js` conterá a lógica necessária para executar o processamento da extração de links de um arquivo. Mas a execução dará de outro arquivo.

Usando o `NodeJS, é bem comum de utilizarmos a linha de comando (_command line_), shell, prompt de comando para executar comandos. Esse tipo de interação é chamada de **command line interface**, que é a forma em que o usuário interage com a nossa biblioteca atraveś de linhas de comando. O acrônimo para isso é _cli_.

O arquivo `cli.js` será responsável pela interação com o usuário. Mas até o momento, não é possível deste novo arquivo utilizar qualquer função existente no arquivo `index.js`. Para podermos utilizar a função que pega um arquivo no arquivo `cli.js`, primeiro é necessário exportar a função do arquivo de origem. Exemplo:
```js
export { pegaArquivo };
```
Existem outras formas de exportação como `export default` ou `module.exports`.

Após a exportação, é possível importar as funções no arquivo `cli.js` através da instrução `import ... from <arquivo/modulo>`.


## Organizando entrada e saídas

Algumas refatorações são necessárias para organizar melhor o desenvolvimento do pacote.

O arquivo `index.js` não deve mais ter nenhuma impressão de informação. Esta característica deve ser repassada para o `cli.js` pois este arquivo que justamente tem o papel de fazer a interação com o usuário. Desta forma, o `index.js` deve retornar as informações processadas apenas e não mais fazer qualquer impressão.

## Scripts

Para facilitar a utilização do desenvolvimento, o `NodeJS` permite criar instruções ou atalhos para executar comandos. Isto é configurado no arquivo `package.json` dentro da propriedade `"scripts"`. Nesta propriedade é possível passar o nome de um script e quais comandos ele deverá executar ao ser invocado.
O scripts são executado usando o seguinte comando: `npm run <nome script>`.

# 5. Validando Links

## Adicionando opções

Através dos argumentos de execução do programa, é possível passar opções que alteram a forma que o programa vai executar. Passando a opção `validar`, podemos informar que os links do arquivo devem ser validados.

## Montando o objeto de links

Através da lista de links, antes de validá-los, é melhor organizá-los para ter apenas as URLs dos links. Para isso, vamos apenas extrair os valores de cada objeto de links e retornar a string da URL.

Podemos utilizar o método `Object.values()` para retornar apenas os valores de um objeto em uma lista ou array. Para retornar os valores como string, é possível usar o `join`, que transforma uma lista em uma string, concantenando cada valor pelo parâmetro informado. No nosso caso, cada lista de valor terá apenas um link e não precisamos concatenar com mais nada, então o parâmetro pode ficar vazio.

## Validando links

Para fazer as requisições e saber se um link está válido ou não, vamos utilizar o pacote `node-fetch` que é uma implementação semelhante à Fetch API existente nos browsers.

A instalação do pacote é feita pelo seguinte comando:
```
npm i node-fetch
```

A execução do fetch sempre retornará uma `Promise`, e como vários links deverão ser validados, temos que usar o método `Promise.all()` que permite uma lista de `promises` sejam executadas e aguardemos o resultado de todas.

O `fetch` retorna um objeto com várias propriedades, dentre elas o `status`, vamos retornar esta propriedade de cada requisição informando se a requisição foi um sucesso ou erro.

# Requisições e respostas

Neste curso começamos a abordar alguns conceitos importantes no desenvolvimento back-end e um deles é o de **requisição/resposta**, que são as duas pontas da comunicação cliente-servidor via HTTP.

**HTTP, ou Hyper Text Transfer Protocol** (protocolo de transferência de hiper-texto) é um protocolo de comunicação entre computadores. Por ser um protocolo, toda a comunicação é feita segundo uma série de regras. Temos um artigo bem bacana sobre HTTP no [blog da Alura](https://www.alura.com.br/artigos/desmistificando-o-protocolo-http-parte-1) e a leitura é mais do que recomendada para entender o que acontece quando acessamos um site - inclusive o que você está lendo agora. Vai te ajudar bastante em seus próximos passos no estudo de desenvolvimento back-end, seja com JavaScript ou outra linguagem.

## Montando o objeto de resposta

Temos um objeto com o links e outro com status, mas o que necessário é um saber qual o link e seu respectivo status.

Para adicionar a propriedade `status` no objeto de links, pode-se mapear a lista de links e retornar um novo objeto com tudo que existe no objeto de link e adicionar a propriedade `status` com o valor do status na lista de status na mesma posição.

Para adicionar todas propriedades de um objeto em outro, pode-ser usar o operador de espalhamento, ou `spread operator`, informando `...` antes do objeto.
```
const obj1 = { a: 1, b: 2 }
const obj2 = {...obj1, c: 3 } // { a:1, b:2, c:3 }
```

Este operador tem vários usos práticos tanto para arrays quanto para objetos. Você pode praticar mais o uso dele e ver outros exemplos neste [Alura+](https://cursos.alura.com.br/extra/alura-mais/destructuring-em-js-c308) sobre desestruturação.

# 6. Testes unitários

## Começando com testes

Para fazer os testes unitários do projeto, será utilizado um framework bem conhecido para testes em código JavaScript chamado `jest`.

Para instalar esse framework, usar o seguinte comando:
```
npm i --save-dev jest
```
A flag `--save-dev` indica que esta dependência serve apenas em tempo de desenvolvimento, ao publicar o pacote, esta dependência não precisa estar no pacote final.

No arquivo `package.json`, este pacote ficará listado dentro da propriedade `devDependencies`, separando das demais dependências realmente necessárias para que o desenvolvimento funcione.

Para facilitar a execução dos testes, vamos adicionar um script no `package.json`, desse modo quando desejar executar um teste, ficará mais simples de executar.

```json
"scripts" {
  "test": "jest"
}
```

O comando para executar o script é `npm test` ou `npm run test`.

Para organizar os testes, vamos criar uma pasta no diretório raiz do projeto chamada de `test`.

Os arquivos que contém os testes tem o sufixo `.test.js`. O começo do nome do arquivo está relacionado ao arquivo cuja lógica será testada.
No caso do arquivo `index.js`, o teste relacionado estará no arquivo `index.test.js`.

Um arquivo de teste pode ter um mais testes do arquivo relacionado. Para inciar, um teste simples pode ser escrito da seguinte forma.
```js
import { pegaArquivoAsync } from '../index.js';

test('deve ser função', () => {
  expect(typeof pegaArquivoAsync).toBe('function');
})
```
Executando o teste acima, deve passar com êxito.

## Adicionando testes

Vamos adicionar testes, agora para efetivamente testar a função. Como a funcionalidade a ser testada é ler um arquivo e extrair os links, é uma prática escrever um arquivo de exemplo simples para ter um cenário controlado e previsível.

Com o arquivo de exemplo, sabendo o resultado que ele retornará, podemos adicionar um teste que validará o retorno da função com o retorno esperado.

```js
import { pegaArquivoAsync } from '../index.js';

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }  
]

describe('pegaArquivo::', () => {
  ...
  it('deve retornar o array com resultados', async () => {
    const resultado = await pegaArquivoAsync('./test/arquivos/texto1.md')
    expect(resultado).toEqual(arrayResult)
  })
  ...
})
```

Para fazer a comparação do array de links, foi usado o método `toEqual()` pois ele consegue validar objetos e não apenas valores primitivos.

## Tipos de testes

Durante este curso escrevemos nossos primeiros testes unitários. Mas afinal, quais são os tipos de teste e para que eles servem?

Um teste unitário, como os que fizemos, testa pequenas partes (ou unidades) de código; normalmente a menor parte “testável” do código. É o primeiro tipo de testes que fazemos, e além de testar funcionalidades nos ajudam a pensar em casos de uso; por exemplo, o que deve acontecer no caso de input incorreto de dados, ou falha em uma resposta. Ao testarmos as possibilidades, percebemos muitas vezes o que está faltando desenvolver.

Além dos testes unitários, ainda existem outros tipos, como os testes de integração, que justamente integra diferentes módulos e envolve uma complexidade maior, e os testes de interface, que simulam a interface e os eventos que o usuário pode efetuar nela, como clique em um botão ou preenchimento de um input.

Temos dois artigos no blog da Alura falando sobre testes: [Testes em JavaScript](https://www.alura.com.br/artigos/testes-em-javascript), que dá um panorama sobre o que são tipos de testes, e [testes com mocks e stubs](https://www.alura.com.br/artigos/testes-com-mocks-e-stubs) que apresenta estas duas ferramentas de testes e como são utilizadas.

## Testando erros

Testar não quer dizer apenas tratar o caso feliz, mas também os erros. Faz parte dos testes unitários avaliar esses cenários.

```js
import { pegaArquivoAsync } from '../index.js';

describe('pegaArquivo::', () => {
  it('deve lançar um erro na falta de arquivo', async () => {
    await expect(pegaArquivoAsync('/home/juliana/Documents/alura/lib-markdown/test/arquivos')).rejects.toThrow(/ENOENT/)
  })
})
```

Caso seja informado um caminho inexistente, a execução deve gerar uma exceção e ela pode ser capturada pelo teste. Isso faz parte de um teste feito.