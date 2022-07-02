import chalk from "chalk";
import { pegaDiretorio } from './index.js'

const caminho = process.argv;

async function processaDiretorio(caminho) {
  const resultado = await pegaDiretorio(caminho);
  console.log(chalk.yellow('arquivos'));
  console.log(JSON.stringify(resultado, null, 4));
}

processaDiretorio(caminho);