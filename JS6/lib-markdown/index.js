import chalk from 'chalk';

import fs from 'node:fs';

const texto = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#@\s].[^\s]*)\)/gm;
  let arrayResultados = [];
  let temp;
  while( (temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }
  return arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Caminho do arquivo inválido'));
}

function pegaArquivoCallback(caminho) {
  const encoding = 'utf-8';
  fs.readFile(caminho, encoding, (erro, texto) => {
    if (erro) {
      trataErro(erro);
    }
    console.log(chalk.green(texto));
  })
}

// pegaArquivoCallback('../arquivos/texto1.mds')
// pegaArquivoCallback('../arquivos/')
// pegaArquivoCallback('../arquivos/texto1.md')

function pegaArquivoPromise(caminho) {
  const encoding = 'utf-8';
  fs.promises.readFile(caminho, encoding)
  .then((texto) => console.log(chalk.green(texto)))
  .catch((erro) => trataErro(erro))
  .finally(() => console.log(chalk.yellow('Promise concluída!')));
}

// pegaArquivoPromise('../arquivos/texto1.mds')
// pegaArquivoPromise('../arquivos/')
// pegaArquivoPromise('../arquivos/texto1.md')

async function pegaArquivoAsync(caminho) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminho, encoding)
    console.log(extraiLinks(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow('Promise concluída!'));
  }
}

// pegaArquivoAsync('../arquivos/texto1.mds')
// pegaArquivoAsync('../arquivos/')
pegaArquivoAsync('../arquivos/texto1.md')
