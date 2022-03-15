const arrayOriginal = ['Maria', 'Carlos', 'Eduardo', 'Samanta']
const arrayConcat = arrayOriginal.concat(['André', 'Fernanda'])
const arrayConcatMais = arrayOriginal.concat(['André', 'Fernanda'], ['Ricardo', 'Ana'], ['Marcelo', 'Bia'])
console.log(arrayOriginal)
console.log(arrayConcat)
console.log(arrayConcatMais)

const arrayNumerico = [50, 60, 70]
const arrayNumericoConcat = arrayNumerico.concat([80, [ 90, 100 ]])
const arrayNumericoConcatSpread = arrayNumerico.concat([80, ...[ 90, 100]])
console.log(arrayNumerico)
console.log(arrayNumericoConcat)
console.log(arrayNumericoConcatSpread)
