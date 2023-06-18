/// <reference types="cypress"/>

Cypress.Commands.add('getTokenLogin', () => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + 'login',
        headers: { 'Content-Type': 'application/json' },
        body: {
            email: "fulano@qa.com",
            password: "teste"
          },
        //   log: false
    }).then(({body}) => body.authorization)
})

Cypress.Commands.add('listaTodosUsuarios', () => {
    cy.getTokenLogin().then(authorization => {
        cy.request({
            method: 'GET',
            url: Cypress.config('baseUrl') + 'usuarios',
            headers: { Authorization: authorization },
        })
    }).as('token')
})

Cypress.Commands.add('criaUsuario', () => {
    cy.get('@token').then(authorization => {
    cy.fixture('payloads/usuarios').then(usuarios => {
        cy.request({
            method: 'POST',
            url: Cypress.config('baseUrl') + 'usuarios',
            headers: {  },
            body: usuarios
        })
    });
    })
})