const nome = "Danilo"
const idade = 2022 - 1986
const cidadeAtual = "Curitiba"

const apresentacaoNormal = "Meu nome é " + nome + ", minha idade é " +
  idade + " e moro em " + cidadeAtual + "."

console.log(apresentacaoNormal)

const apresentacaoTemplate = `Meu nome é ${nome}, minha idade é ${idade} e moro em ${cidadeAtual}.`
console.log(apresentacaoTemplate)

const stringComOperacao = `1 + 1 = ${1 + 1}`
console.log(stringComOperacao)
console.log(`Meu nome é ${nome.toUpperCase()}`)
console.log(`Meu nome é ${nome.toLowerCase()}`)
