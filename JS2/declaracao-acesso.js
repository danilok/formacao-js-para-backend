const array1 = []
const array2 = [, 'banana', , 3]
const array3 = [,,,,] // array esparso
const array4 = [2] // array esparso
const array5 = new Array()
// const array5 = new Array(, 'banana', , 3) // não é possível declarar assim
const array6 = new Array([, 'banana', , 3])
const array7 = new Array([,,,,])
// const array6 = new Array(,,,,) // Essa construção não é possível
const array8 = new Array(2)

change(array1, 'array1')
change(array2, 'array2')
change(array3, 'array3')
change(array4, 'array4')
change(array5, 'array5')
change(array6, 'array6')
change(array7, 'array7')
change(array8, 'array8')

function dump(array, label) {
  console.group(label)
  console.log('Data: ', array)
  console.log(`Len: ${array.length}`, `(${label.split(' ')[0]}.length)`, (!!array.length))
  console.log(`index[0]: `, array[0])
  console.log(`index[1]: `, array[1])
  console.log(`index[2]: `, array[2])
  console.log(`index[3]: `, array[3], '\n')
  console.groupEnd()  
}

function change(array, label) {
  console.group(`Changes ${label}`)
  dump(array, `${label} pre change`)
  array.push('pushed')
  dump(array, `${label} push change`)
  array[2] = 'value'
  dump(array, `${label} index change`)
  console.groupEnd()
}