/**
 * Função sem parâmetro e sem retorno
 */
function semParametrosSemRetorno() {
  console.log('Olá mundo sem parâmetros')
}

/**
 * Função com parâmetro e sem retorno
 */
function comParametrosSemRetorno(text) {
  console.log(text)
}

/**
 * Função sem parâmetro e com retorno
 */
function semParametrosComRetorno() {
  return 'Olá mundo'
}

/**
 * Função com parâmetro e com retorno
 */
function comParametrosComRetorno(text) {
  return `Olá ${text}`
}

/**
 * Função que retorna uma função
 */
function funcaoRetornandoFuncao() {
  return semParametrosComRetorno;
}

/**
 * Função que executa função recebida como parâmetro
 * O parâmetro deve ser a declaração da função e não o resultado da execução
 * Portanto, dentro desta função, a função recebida deve ser executada denotada por funcao()
 */
function funcaoQueExecutaFuncaoRecebida(funcao) {
  comParametrosSemRetorno(funcao())
}

semParametrosSemRetorno(); // Olá mundo sem parâmetros
comParametrosSemRetorno('Olá mundo com parâmetros'); // Olá mundo com parâmetros
console.log(semParametrosComRetorno()) // Olá mundo
console.log(comParametrosComRetorno('mundo retornado')) // Olá mundo retornado
console.log(comParametrosComRetorno(semParametrosComRetorno())) // Olá Olá mundo

// O próximo cenário executa a função retornada após a execução da funcaoRetornandoFuncao
// no final das contas é como se tivesse sendo executado semParametrosComRetorno()
console.log(funcaoRetornandoFuncao()()) // Olá mundo

// Neste cenário a função comParametrosSemRetorno recebe a execução da função retornada 
// pela função funcaoRetornandoFuncao, o mesmo resultado da função anterior
comParametrosSemRetorno(funcaoRetornandoFuncao()()); // Olá mundo

// Aqui o resultado da funcao funcaoRetornandoFuncao(), que retorna a função semParametrosComRetorno
// é executado dentro da função funcaoQueExecutaFuncaoRecebida e seu resultado é passado como argumento
// para comParametrosSemRetorno
funcaoQueExecutaFuncaoRecebida(funcaoRetornandoFuncao()) // Olá mundo
