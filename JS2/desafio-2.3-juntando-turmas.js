/**
 * DESAFIO: Juntando as salas
 * Haverá uma palestra sobre padrões de projetos para as
 * alunas das salas de Javascript e Python.
 * Junte ambas as salas em uma única lista que exiba todas
 * as alunas.
 */

const salaDePython = ['Melissa', 'Helena', 'Rodrigo']

const salaDeJavascript = ['Ju', 'Leo', 'Raquel']

// Concat não altera arrays originais
const salasUnificadas = salaDePython.concat(salaDeJavascript)

console.log(`Salas unificadas [concat]: ${salasUnificadas}`)
console.log(`Salas unificadas [spread]: ${[...salaDePython, ...salaDeJavascript]}`)
