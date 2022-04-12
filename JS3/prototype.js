console.log({ a: 1}.__proto__)
console.dir('texto'.__proto__)
const num = Number(2)
console.log(num.toString())

const obj = new Object({ b: 2 })
console.log(obj.__proto__)
console.log(obj.hasOwnProperty('b'))
console.log(obj.hasOwnProperty('c'))
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))
console.log(Object.prototype)

const obj2 = Object.create(obj)
console.log(obj2)
console.log(Object.keys(obj2))
obj2.b = 3
console.log(obj)
console.log(obj2)

const obj3 = {
  c: 3,
  d: 4
}
const obj4 = Object.assign(obj3)
console.log(obj3)
console.log(obj4)
obj4.c = 5
console.log(obj4)