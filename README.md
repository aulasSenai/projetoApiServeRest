# Projeto de Testes Automatizados API com Cypress

Este repositório contém um projeto de testes automatizados para a API pública ServeRest, utilizando o framework Cypress.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Login
- Usuários
- Produtos
- Carrinho

## Estrutura do Repositório

A estrutura básica do repositório é a seguinte:

```
├── cypress
│   ├── fixtures
│   ├── e2e
│   ├── support
│   ├── ...
├── cypress.config
├── .gitignore
├── package.json
└── README.md
```

- A pasta `cypress` contém os arquivos de configuração e os testes automatizados.
- A pasta `fixtures` contém dados de teste em formato JSON.
- O diretório `e2e` contém os testes automatizados separados por funcionalidade.
- O diretório `cypress.config` contém os plugins utilizados pelo Cypress.
- A pasta `support` contém arquivos de suporte aos testes, como comandos personalizados.
- O arquivo `.gitignore` especifica quais arquivos devem ser ignorados pelo Git.
- O arquivo `package.json` contém as informações e dependências do projeto.
- O arquivo `README.md` é este documento.

## Requisitos e Execução

Certifique-se de ter o [Cypress](https://www.cypress.io/) instalado.

Para rodar os testes:

1. Clone o repositório.
2. Abra o terminal na raiz do projeto.
3. Execute `npm install` para instalar as dependências.
4. Execute `npx cypress open` para abrir o Cypress Test Runner.
5. No Test Runner, selecione o arquivo de teste desejado.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para sugerir melhorias ou adicionar novos testes através de pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.