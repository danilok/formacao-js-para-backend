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

### Métodos comuns de array

- Adicionar na última posição: `Array.push(<element>)`
- Remover da última posição: `Array.pop()`

## 2 Alterando arrays

### Dividir arrays
Método `slice`, não altera o array original.

### Adicionar arrays
Método `splice`, altera o array original.

### Concatenar arrays
Método `concat`, não altera os arrays originais.

### Lista com 2 dimensões
Declarar lista dentro de listas, também podem ser chamadas de matrizes. Para acessar uma posição de uma lista dentro de outra listas, também se utiliza os `[]`.
Ex: imagem[255][231] = imagem[x][y]

## 3 Laços de repetição
## 4 Métodos callback
## 5 Mais métodos de array
