import chalk from 'chalk';

import fs from 'node:fs';
import path from 'node:path';

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#@\s].[^\s]*)\)/gm;
  let arrayResultados = [];
  let temp;
  while( (temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }
  return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
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
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow('Promise concluída!'));
  }
}

// pegaArquivoAsync('../arquivos/texto1.mds')
// pegaArquivoAsync('../arquivos/')
// pegaArquivoAsync('../arquivos/texto1.md')

/* tratamento para diretório */
async function pegaDiretorio(caminho) {
  try {
    const caminhoAbsoluto = path.join(caminho[1], '..', caminho[2]);
    const encoding = 'utf-8';
    const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
    // console.log(chalk.yellow('arquivos'), arquivos);
    const resultado = await Promise.all(arquivos.map(async (arquivo) => {
      const caminhoArquivo = `${caminhoAbsoluto}${arquivo}`;
      // console.log(`Arquivo em processamento: ${caminhoArquivo}`);
      return {
        arquivo,
        links: await pegaArquivoAsync(caminhoArquivo)
      };
    }));
    // console.log(chalk.yellow('resultado'), resultado)
    return resultado;
  } catch (erro) {
    trataErro(erro);
  }
}

export {
  pegaArquivoAsync,
  pegaArquivoCallback,
  pegaArquivoPromise,
  pegaDiretorio
}