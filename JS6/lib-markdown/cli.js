import chalk from 'chalk';
import { pegaArquivoAsync } from './index.js';
import validaURLs from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivoAsync(caminhoDeArquivo[2]);
  if (caminhoDeArquivo[3] === 'validar') {
    console.log(chalk.yellow('links validados'), await validaURLs(resultado));  
  } else {
    console.log(chalk.yellow('lista de links'), resultado);
  }
}

processaTexto(caminho);