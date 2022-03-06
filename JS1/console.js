// log -> registro
const minhaVar = true;
console.log(245)
console.log("eu sou um texto")
console.log(minhaVar)
console.log(undefined)
console.log(null)

console.group('erros')
console.error('deu erro!')
console.error(new Error('deu erro!'))
console.warn('deu warning!')
console.warn(new Error('deu warning!'))
console.groupEnd()

console.group('Timer')
console.time('time-loop')
for (let i; i < 10000; i++) { }
console.timeEnd('time-loop')
console.groupEnd()

console.trace()

const data = { a: 'a', b: 1, c: true };
console.group('Saída em tela')
console.dir(data)
console.dirxml(data) // mesmo que console.log()
console.log(data)
console.table(data)
console.groupEnd()

console.count('counter')
console.count('counter')
console.count('counter')
console.count('counter')
console.count('counter')
console.countReset('counter')
console.count('counter')
console.count('counter')
console.countReset('counter')
console.debug('igual console.log()')
