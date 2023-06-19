# Projeto de Testes Automatizados API com Cypress

Este documento descreve o repositório e o projeto de testes automatizados para API usando o framework Cypress, com foco na API pública chamada 'ServeRest'.

## Sobre o Projeto

O projeto tem como objetivo realizar testes automatizados na API ServeRest. O framework utilizado é o Cypress, conhecido por sua facilidade de uso e poderosa biblioteca de testes.

## Funcionalidades

O projeto possui os seguintes recursos:

1. **Login**: Testes para realizar login na API ServeRest, verificando se o usuário é autenticado com sucesso.
2. **Usuários**: Testes para cadastrar, pesquisar, atualizar e excluir usuários na API ServeRest.
3. **Produtos**: Testes para cadastrar, pesquisar, atualizar e excluir produtos na API ServeRest.
4. **Carrinho**: Testes para manipular o carrinho de compras na API ServeRest, adicionando e removendo produtos.

## Estrutura do Repositório

O repositório segue uma estrutura básica:

```
├── cypress
│   ├── fixtures
│   ├── integration
│   ├── plugins
│   ├── support
│   ├── ...
├── node_modules
├── .gitignore
├── package.json
└── README.md
```

- O diretório `cypress` contém os arquivos de configuração e os testes automatizados.
- O diretório `fixtures` contém arquivos JSON com dados de teste.
- O diretório `e2e` contém os testes automatizados separados por funcionalidade.
- O diretório `cypress.config` contém os plugins utilizados pelo Cypress.
- O diretório `support` contém os arquivos de suporte aos testes, como comandos personalizados.
- O diretório `node_modules` contém as dependências do projeto.
- O arquivo `.gitignore` especifica quais arquivos devem ser ignorados pelo controle de versão Git.
- O arquivo `package.json` contém as informações e dependências do projeto.
- O arquivo `README.md` é este documento.

## Requisitos

Para rodar os testes automatizados deste projeto, você precisa ter o [Cypress](https://www.cypress.io/) instalado em seu ambiente de desenvolvimento.

## Como Executar os Testes

1. Clone este repositório em seu ambiente local.
2. Abra o terminal na pasta raiz do projeto.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npx cypress open` para abrir o Cypress Test Runner.
5. No Cypress Test Runner, clique no nome do arquivo de teste que deseja executar.
6. Aproveite os testes automatizados e os resultados exibidos no painel de execução.

## Contribuições

Contribuições são sempre bem-vindas! Caso deseje melhorar este projeto ou adicionar novos testes, sinta-se à vontade para abrir uma pull request.

## Licença

Este projeto é distribuído sob a licença MIT.