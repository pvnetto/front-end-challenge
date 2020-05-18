# Sobre o projeto

[Demo da aplicação](https://autoforce-frontend-test.herokuapp.com/etios-hatch-085d1d9d-9a80-4d59-8369-8105847e1603)

A aplicação foi feita usando a biblioteca ReactJS, GatsbyJS e SASS Modules. Assim como todos os estilos globais, o arquivo variables.scss se encontra na pasta src/styles, porém todos os componentes da aplicação usam módulos SASS e importam o variables.scss quando necessário.

## Estrutura de diretório
    .
    ├── api
    │   └── autoforce   # Chamadas a API da AutoForce
    │   └── gatsby      # Funções de setup para API do Gatsby
    │   └── mock        # Dados mock consumidos pelas APIs
    │
    └── src             # Código fonte e assets da aplicação
       └── assets       # Imagens, fontes etc
       └── components   # Componentes React da aplicação
       └── pages        # O Gatsby exige que as páginas sejam incluídas nesse diretório
       └── styles       # Arquivos SCSS globais
       └── templates    # Templates para páginas estáticas geradas pelo Gatsby

## Rodando em desenvolvimento

Para rodar o projeto, basta instalar o gatsby-cli, clonar o repositório, instalar as dependências e executar o script npm run develop. Antes de executar, é importante **criar um arquivo .env na raiz do projeto**, utilizando como referência o arquivo .env.example presente nesse repositório.

```
npm install gatsby-cli -g
cd project/path
git clone https://github.com/pvnetto/front-end-challenge.git
cd front-end-challenge
npm install
npm run develop
```






