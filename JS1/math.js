console.group('Math.round')
console.log(`5.5: ${Math.round(5.5)}
6.6: ${Math.round(6.6)}
3.2: ${Math.round(3.2)}`)
console.groupEnd()

console.group('Math.ceil')
console.log(`5.5: ${Math.ceil(5.5)}
6.6: ${Math.ceil(6.6)}
3.2: ${Math.ceil(3.2)}`)
console.groupEnd()

console.group('Math.floor')
console.log(`5.5: ${Math.floor(5.5)}
6.6: ${Math.floor(6.6)}
3.2: ${Math.floor(3.2)}`)
console.groupEnd()

console.group('Math.trunc')
console.log(`5.5: ${Math.trunc(5.5)}
6.6: ${Math.trunc(6.6)}
3.2: ${Math.trunc(3.2)}`)
console.groupEnd()

console.group('Math.pow')
console.log(`2^3: ${Math.pow(2, 3)}
3^3: ${Math.pow(3, 3)}
2^10: ${Math.pow(2, 10)}`)
console.groupEnd()

console.group('Math.sqrt')
console.log(`\u221A4: ${Math.sqrt(4)}
\u221A81: ${Math.sqrt(81)}
\u221A10000: ${Math.sqrt(10000)}`)
console.groupEnd()

console.log(`Math.min
  (0, 150, 30, 20, -8, -200): ${Math.min(0, 150, 30, 20, -8, -200)}`)
console.log(`Math.max
  (0, 150, 30, 20, -8, -200): ${Math.max(0, 150, 30, 20, -8, -200)}`)

console.group('Math.random')
console.log(`0 a 1: ${Math.random()}
1 a 10: ${Math.floor(Math.random() * 10 + 1)}
0 a 999: ${Math.floor(Math.random() * 1000)}`)
console.groupEnd()