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