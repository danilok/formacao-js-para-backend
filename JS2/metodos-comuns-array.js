console.log('Array.concat()')
const arrayImpar = [ 1, 3, 5, 7, 9, 11, 13, 15]
console.log(`Array ímpar: ${arrayImpar}`)
const arrayPar = [ 2, 4, 6, 8 , 10, 12, 14]
console.log(`Array par: ${arrayPar}`)
console.log(`Array impar+par: ${arrayImpar.concat(arrayPar)}`)
console.log(`Array par+impar: ${arrayPar.concat(arrayImpar)}`)
const arrayTodos = arrayImpar.concat(arrayPar)
console.log(`Array todos (impar+par): ${arrayTodos}`)
console.group('Array.filter()')
console.log(`(pares): ${arrayTodos.filter(numeroPar)}`)
console.log(`(impares): ${arrayTodos.filter(numeroImpar)}`)
console.groupEnd()

console.group('Array.find()') 
console.log(`(3) =>: ${arrayTodos.find(x => x === 3)}`)
console.log(`(4) =>: ${arrayTodos.find(x => x === 4)}`)
console.log(`(20) =>: ${arrayTodos.find(x => x === 20)}`)
console.log(`(3) doisIguais: ${arrayTodos.find(doisIguais, 3)}`)
console.log(`(4) doisIguais: ${arrayTodos.find(doisIguais, 4)}`)
console.log(`(20) doisIguais: ${arrayTodos.find(doisIguais, 20)}`)
console.log(`(3) tresIguais: ${arrayTodos.find(tresIguais, 3)}`)
console.log(`(4) tresIguais: ${arrayTodos.find(tresIguais, 4)}`)
console.log(`(20) tresIguais: ${arrayTodos.find(tresIguais, 20)}`)
console.groupEnd()

console.group('Array.findIndex()')
console.log(`(3) =>: ${arrayTodos.findIndex(x => x === 3)}`)
console.log(`(4) =>: ${arrayTodos.findIndex(x => x === 4)}`)
console.log(`(20) =>: ${arrayTodos.findIndex(x => x === 20)}`)
console.log(`(3) doisIguais: ${arrayTodos.findIndex(doisIguais, 3)}`)
console.log(`(4) doisIguais: ${arrayTodos.findIndex(doisIguais, 4)}`)
console.log(`(20) doisIguais: ${arrayTodos.findIndex(doisIguais, 20)}`)
console.log(`(3) tresIguais: ${arrayTodos.findIndex(tresIguais, 3)}`)
console.log(`(4) tresIguais: ${arrayTodos.findIndex(tresIguais, 4)}`)
console.log(`(20) tresIguais: ${arrayTodos.findIndex(tresIguais, 20)}`)
console.groupEnd()

console.group('Array.indexOf()')
console.log(`(3) =>: ${arrayTodos.indexOf(3)}`)
console.log(`(4) =>: ${arrayTodos.indexOf(4)}`)
console.log(`(20) =>: ${arrayTodos.indexOf(20)}`)
console.groupEnd()

console.group('Array.lastIndexOf()')
console.log(`(3) =>: ${arrayTodos.lastIndexOf(3)}`)
console.log(`(4) =>: ${arrayTodos.lastIndexOf(4)}`)
console.log(`(20) =>: ${arrayTodos.lastIndexOf(20)}`)
console.groupEnd()

console.group('Array pares.forEach()')
console.group(`dobro():`)
arrayPar.forEach(dobro)
console.groupEnd()
console.group(`triplo() =>:`)
arrayPar.forEach((numero => console.log(`${numero} * 3: ${numero * 3}`)))
console.groupEnd()
console.groupEnd()

let tamanhoNovo, removido
console.group(`Array todos (impar+par): ${arrayTodos}`)
tamanhoNovo = arrayTodos.push(16)
console.log(`(pos push 7): ${arrayTodos} | tamanho novo: ${tamanhoNovo}`)
tamanhoNovo = arrayTodos.push(17)
console.log(`(pos push 8): ${arrayTodos} | tamanho novo: ${tamanhoNovo}`)

removido = arrayTodos.pop()
console.log(`(pos pop): ${arrayTodos} | removido: ${removido}`)
removido = arrayTodos.pop()
console.log(`(pos pop): ${arrayTodos} | removido: ${removido}`)

removido = arrayTodos.shift()
console.log(`(pos shift): ${arrayTodos} | removido: ${removido}`)
removido = arrayTodos.shift()
console.log(`(pos shift): ${arrayTodos} | removido: ${removido}`)

tamanhoNovo = arrayTodos.unshift(3)
console.log(`(pos unshift 3): ${arrayTodos} | tamanho novo: ${tamanhoNovo}`)
tamanhoNovo = arrayTodos.unshift(1)
console.log(`(pos unshift 1): ${arrayTodos} | tamanho novo: ${tamanhoNovo}`)
console.log(`(reverse): ${arrayTodos.reverse()}`)
console.log(`(reverse): ${arrayTodos.reverse()}`)
console.groupEnd()

console.group(`Array todos slice(): ${arrayTodos}`)
console.log(`(3): ${arrayTodos.slice(3)}`)
console.log(`(2, 8): ${arrayTodos.slice(2, 8)}`)
console.log(`(13, 15): ${arrayTodos.slice(13, 15)}`)
console.log(`(14, 16): ${arrayTodos.slice(14, 16)}`)
console.groupEnd()

let removidos
console.group(`Array todos splice(): ${arrayTodos}`)
removidos = arrayTodos.splice(12)
console.log(`remover todos a partir do índice 12: ${arrayTodos} | removidos: `, removidos)
removidos = arrayTodos.splice(12, 0, 10, 12, 14) // números para adicionar não pode ser um array pois senão adiciona um array dentro do array
console.log(`remover nenhum mas adicionar 2, 4, 6 a partir do índice 3: ${arrayTodos} | removidos: `, removidos)
removidos = arrayTodos.splice(2, 2)
console.log(`remover 2 elementos a partir do índice 2: ${arrayTodos} | removidos: `, removidos)
removidos = arrayTodos.splice(2, 0, ...removidos) // números para adicionar não pode ser um array pois senão adiciona um array dentro do array
console.log(`remover nenhum mas adicionar 5, 2 a partir do índice 2: ${arrayTodos} | removidos: `, removidos)
console.log('Array todos: ', arrayTodos)
console.groupEnd()

console.group(`Array sort: ${arrayTodos}`)
console.log(`Sort padrão (lexico unicode): ${arrayTodos.sort()}`)
console.log(`Sort (a - b): ${arrayTodos.sort((a, b) => a - b)}`)
console.log(`Array todos: ${arrayTodos}`)
console.groupEnd()

console.group(`Array reduce: ${arrayTodos}`)
let somaTodos = arrayTodos.reduce((acum, numero) => acum += numero, 0)
console.log(`Soma todos: ${somaTodos}`)
let dobraTodos = arrayTodos.reduce((dobrados, numero) => {
  return [ ...dobrados, numero * 2]
}, [])
console.log(`Dobrados: ${dobraTodos}`)
let mapTriplo = arrayTodos.reduce((objFinal, numero) => {
  return {
    ...objFinal,
    [numero]: numero * 3
  }
}, {})
console.log(`Map Triplo: ${JSON.stringify(mapTriplo)}`)
console.groupEnd()

console.group(`Array reduceRight: ${arrayTodos}`)
somaTodos = arrayTodos.reduceRight((acum, numero) => acum += numero, 0)
console.log(`Soma todos: ${somaTodos}`)
dobraTodos = arrayTodos.reduceRight((dobrados, numero) => {
  return [ ...dobrados, numero * 2]
}, [])
console.log(`Dobrados: ${dobraTodos}`)
mapTriplo = arrayTodos.reduceRight((objFinal, numero) => {
  return {
    ...objFinal,
    [numero]: numero * 3
  }
}, {})
console.log(`Map Triplo: ${JSON.stringify(mapTriplo)}`)
console.groupEnd()

function numeroPar(numero) {
  return numero % 2 === 0
}

function numeroImpar(numero) {
  return !numeroPar(numero)
}

function doisIguais(value, index, arr) {
  // console.log(value, index, arr, this)
  return value == this
}

function tresIguais(value, index, arr) {
  // console.log(value, index, arr, this)
  return value === parseInt(this)
}

function dobro(numero) {
  console.log(`${numero} * 2: ${numero * 2}`)
}