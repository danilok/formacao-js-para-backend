# Fundamentos do JavaScript: Arrays

## 1 O que são arrays

### **O que são?**
Uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, e cada elemento se localiza numa posição, na lista, chamada de índice.

- Elemento

  Cada dado que compõe um array é chamado elemento. Um elemento pode ter um tipo primitivo ou ser um objeto.

- Índice

  É o número que identifica um elemento em uma determinada posição no array. Este numero deve ser um número inteiro não-negativo. O primeiro índice do array é 0, o segundo é 1, e assim por diante.

- Lista ordenada de valores enumerados

  Por lista ordenada, entende-se que os valores estarão sempre em uma mesma sequência de acesso, e caso não haja alteração na lista, o acesso de um determinado elemento retornará sempre o mesmo valor.
  Em outras palavras, caso você acesse o primeiro elemento, o valor será sempre o mesmo.
  Não confunda lista ordenada com valores ordenados da lista.

### **Declaração**
Podemos declarar um array de algumas maneiras.
```js
const array1 = ['banana', 'manga', 'pera'] // literal
const array2 = new Array(1, 2, 3, 4)       // new objeto Array
``` 

### **Acesso a um valor**
Utilizamos a notação de colchetes `[indice]` para acessar um determinado elemento do array. Lembrando que primeiro o índice do array é 0.
Exemplos:
- array[0] = acesso ao primeiro elemento do array 
- array[3] = acesso ao 4 elemento do array 

### **Tamanho**
Através da propriedade `length` é possível saber a quantidade de elementos de um array. O valor retornado será um número inteiro-não negativo.

### **Métodos comuns de array**

- Adicionar na última posição: `Array.push(<element>)`
- Remover da última posição: `Array.pop()`

## 2 Alterando arrays

### **Dividir arrays**
Método `slice`, não altera o array original.

### **Adicionar arrays**
Método `splice`, altera o array original.

### **Concatenar arrays**
Método `concat`, não altera os arrays originais.

### **Lista com 2 dimensões**
Declarar lista dentro de listas, também podem ser chamadas de matrizes. Para acessar uma posição de uma lista dentro de outra listas, também se utiliza os `[]`.
Ex: imagem[255][231] = imagem[x][y]

## 3 Laços de repetição

### **Procurar um elemento**
Método `indexOf`, retorna o índice do elemento encontrado ou -1 caso não encontre.

### **For clássico**
O comando de iteração comum não só no javascript como em outras linguagens de programação.
```js
for (let i = 0; i < arr.length; i++) {

}
```

### **ForEach dos arrays**
Uma outra forma para iterar entre os elementos de um array.
```js
[1, 3, 5, 6].forEach((el) => console.log(el))
```
Tem o mesmo funcionamento que o `for` porém pode ser escrito de outra maneira.
Este método de Arrays não retorna nenhum valor.

## 4 Métodos callback

### **Função callback**
Em Javascript, vários métodos e funções necessitam que uma função seja informada como parâmetro para serem executadas. Essa funções são chamadas de `callback`, em uma tradução livre, chame de volta.

O que acontece é que uma função deve ser informada pois uma função é esperada para ser executada dentro destes métodos e funções do Javascript.

```js
function callback() { console.log('hi') }

function chamaCallback(cb) {
  cb()
}

chamaCallback(callback) // hi
```

Isto pode acontecer tanto em cenários síncronos como assíncronos.

### **Método `map`**
Método que percorre todos os itens do array, executa a função `callback` informada e retorna um valor em cada iteração. Caso não retorne explicitamente um valor em cada iteração, o valor será `undefined`.
## 5 Mais métodos de array

### **Filtrando elements**
O método `filter` espera uma função callback com a lógica para filtrar os elementos e retorna um novo array com todos os elementos que retornaram `true` da lógica informada.

### **Somando com reduce**
O método `reduce` espera 2 parâmetros, uma função e o valor inicial do acumulador. A função tem 2 parâmetros principais, um acumulador e o valor atual da iteração no array. Cada execução da função deve retornar o acumulador para as próximas iterações.

Um caso de uso do `reduce` é para fazer o somatório dos valores de um array. Porém, ele pode ser usados para diversos outros casos, como a transformação de um array em um objeto. O que com o `map` não é possível pois esta função sempre retorna uma array. Pode ser feito com `forEach`, mas seria necessária declarar uma variável previamente para ser utilizada dentro da função callback.
