# Fundamentos do JavaScript: Objetos

## 1 O que são objetos

### **O que são?**
Objeto em javascript é uma estrutura de dados que armazena um conjunto de pares `chave:valor`.
A chave é representada comumente por uma string mas o valor pode ser de qualquer tipo, string, número, função e até outro objeto.
O conjunto chave-valor devem ser separados por `,`.

Exemplo de declaração de um objeto:
```js
const obj = {
  chave1: 'valor1',
  chave2: 2,
  chave3: true,
  chave4: [1, 2, 3],
  chave5: () => console.log('olá mundo')
}
```

Um detalhe sobre a chave, apesar de ser comumente representada por string, é possível usar número e até a string que representa os valores booleanos.
Porém fazer este tipo de uso não é o mais indicado. Além disso, o Javascript geralmente utiliza o camelCase como padrão, porém as chaves podem ser definidas usando `-`, como em `e-mail`. Mas para isso, não é possível definir diretamente como no exemplo acima. É necessário envolver a chave entre aspas simples ou duplas. O caractere `_` é aceito como separador como em `minha_chave`. Outro cenário a ser evitado, é a chave espaço, o que também exige que a definição esteja envolvida por aspas.

```js
const obj2 = {
  'e-mail': 'teste@email.com',
  minha_chave: 490249280,
  'outra chave': true
}
```
Apesar de ser possível, não é recomendado usar este tipo de declaração, mas caso o objeto venha de uma fonte externa, pode surgir situações como essa.
É possível ainda definir chaves com os valores `true` ou `false`. Mas para evitar confusão com os valores booleanos, isso é desaconselhável.

### **Acessando dados**
O acesso a dados pode ser feito com notação de `.` ou notação de `[]`.

Usa-se a notação de ponto para acessar diretamente uma propriedade do objeto. Usando esta notação, não é possível acessar uma propriedade dinamicamente.
```js
objeto.propriedade
cliente.cpf
carro.rodas
obj.true // cenário não aconselhável
obj.false // cenário não aconselhável
```

Quando for necessário acessar uma propriedade dinamicamente, o mais apropriado é utilizar a notação de colchetes. Desta forma, é possível informar uma variável com o valor da chave que deseja-se acessar.
```js
objeto['propriedade']
const chave = 'cpf'
cliente[chave]
carro['rodas']
```

Também é possível usar a notação de colchetes caso um chave seja um valor númerico (não é possível acessar chaves númericas através da notação de `.`), tenha separadores como `-` ou que contenham espaços na chave.
```js
obj2['e-mail']
obj2['minha_chave']
obj2.minha_chave
obj2['outra chave']
```

### **Adicionando e alterando**

Para adicionar uma propriedade nova ou alterar uma existente, pode ser usando tanto notação de `.` quanto `[]`.

```js
const obj = {}
obj.nome = 'danilo'
obj['nome'] = 'Danilo'
```

### **Deletando propriedades**

Utilizar o operador unário `delete` informando em seguida a propriedade do objeto a ser deletada. Aceita tanto notação de `.` quanto `[]`.
```js
delete obj.nome
delete obj['nome']
```

Esta operação de remoção retorna um booleano. O retorno é `true` passando uma propriedade que existe e mesmo uma que não exista. Único caso em que o retorno será `false` quando a propriedade a ser removida for herdade de outro objeto.

A deleção de uma propriedade remove tanto a chave quanto o seu valor.

Caso tente ver o valor de uma chave após ela ser removido, o valor será `undefined`.