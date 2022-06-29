# NodeJS: criando sua biblioteca

## Criando um projeto NodeJS

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

## Carregamento de arquivos

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