import chalk from 'chalk';
import { pegaArquivoAsync } from './index.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivoAsync(caminhoDeArquivo[2]);
  console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho);