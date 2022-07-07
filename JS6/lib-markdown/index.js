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
  throw new Error(erro.code, 'Caminho do arquivo inválido');
}

function pegaArquivoCallback(caminho) {
  const encoding = 'utf-8';
  fs.readFile(caminho, encoding, (erro, texto) => {
    if (erro) {
      trataErro(erro);
    }
  })
}

// pegaArquivoCallback('../arquivos/texto1.mds')
// pegaArquivoCallback('../arquivos/')
// pegaArquivoCallback('../arquivos/texto1.md')

function pegaArquivoPromise(caminho) {
  const encoding = 'utf-8';
  fs.promises.readFile(caminho, encoding)
  .then((texto) => console.log(texto))
  .catch((erro) => trataErro(erro));
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
    const resultado = await Promise.all(arquivos.map(async (arquivo) => {
      const caminhoArquivo = `${caminhoAbsoluto}${arquivo}`;
      return {
        arquivo,
        links: await pegaArquivoAsync(caminhoArquivo)
      };
    }));
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