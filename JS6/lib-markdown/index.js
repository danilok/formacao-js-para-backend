import chalk from 'chalk';

import fs from 'node:fs';

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
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow('Promise concluída!'));
  }
}

// pegaArquivoAsync('../arquivos/texto1.mds')
pegaArquivoAsync('../arquivos/')
// pegaArquivoAsync('../arquivos/texto1.md')
