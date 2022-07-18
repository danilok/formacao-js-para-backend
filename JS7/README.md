# JavaScript: programação orientada a objetos

# 1. Entendendo a orientação a objetos

```plantuml
@startuml Modelo
class User {
  nome: string
  email: string
  nascimento: Date
  role: string
  ativo: boolean
  constructor()
  exibirInfos()
}

class Admin {
  constructor()
  exibirInfos()
}

class Docente {
  constructor()
  aprovarEstudante()
}

hide Admin fields
hide Docente fields

User <|-- Admin
User <|-- Docente

@enduml
```

![uncached image](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/danilok/formacao-js-para-backend/test/plantuml/JS7/projeto.wsd)