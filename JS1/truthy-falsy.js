// boolean
const usuarioLogado = true
const contapaga = false

// truthy ou falsy

// 0 => false
// 1 => true

// string vazia = false
console.group('string vazia')
console.log(`'' == false:\t${'' == false}`)
console.log(`"" == false:\t${"" == false}`)
console.log(`'' == true:\t${'' == true}`)
console.log(`"" == true:\t${"" == true}\n`)
console.groupEnd()

// zero = false
console.group('zero')
console.log(`0 == false:\t${0 == false}`)
console.log(`0 == true:\t${0 == true}\n`)
console.groupEnd()
// inteiros negativos = false
console.group('inteiros negativos')
console.log(`-10 == true:\t${-1 == true}`)
console.log(`-1 == true:\t${-1 == true}\n`)
console.groupEnd()
// inteiros positivos = true
console.group('inteiros positivos')
console.log(`1 == true:\t${1 == true}`)
console.log(`10 == true:\t${1 == true}\n`)
console.groupEnd()
// ponto flutuante
console.group('ponto flutuante')
console.log(`-1.5 == true:\t${-1.5 == true}`)
console.log(`-3.7 == true:\t${-3.7 == true}`)
console.log(`1.5 == true:\t${1.5 == true}`)
console.log(`3.75 == true:\t${3.75 == true}\n`)
console.groupEnd()
// null => vazio ou nada
console.group('null')
console.log(`typeof null:\t\t${typeof null} <- Exceção`)
console.log(`null == false:\t${null == false}`)
console.log(`null == true:\t\t${null == true}`)
console.log(`null == null:\t\t${null == null}`)
console.log(`null === false:\t${null === false}`)
console.log(`null === true:\t${null === true}`)
console.log(`null === null:\t${null === null}`)
console.log(`(null):\t\t${(null) ? true : false}\n`)
console.groupEnd()
// undefined (sem valor)
console.group('undefined')
console.log(`typeof undefined:\t\t${typeof undefined}`)
console.log(`undefined == false:\t\t${undefined == false}`)
console.log(`undefined == true:\t\t${undefined == true}`)
console.log(`undefined == undefined:\t${undefined == undefined}`)
console.log(`undefined === false:\t\t${undefined === false}`)
console.log(`undefined === true:\t\t${undefined === true}`)
console.log(`undefined === undefined:\t${undefined === undefined}`)
console.log(`(undefined):\t\t\t${(undefined) ? true : false}\n`)
console.groupEnd()

console.log(`null == undefined:\t${null == undefined}`)
console.log(`null === undefined:\t${null === undefined}`)
