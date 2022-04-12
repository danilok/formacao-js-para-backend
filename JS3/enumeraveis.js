const catalogo = {
  "editora": "Casa do Código",
  "catalogo": [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    }
  ]
}

console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))

console.log('Chave a chave')
for (let key in catalogo) {
  console.log(key, Object.getOwnPropertyDescriptor(catalogo, key))
}

console.log('Todas as chaves')
console.log(Object.getOwnPropertyDescriptors(catalogo))