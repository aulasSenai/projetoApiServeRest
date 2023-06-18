/// <reference types="cypress"/>

describe('Cenários de testes de Usuários via API', () => {
    it('Deve criar usuário com sucesso', () => {
       
    });

    it.only('Lista todos os usuários com sucesso', () => {
       cy.listaTodosUsuarios().then(({status, body, duration}) => {
        expect(status).to.eq(200)

        // expect(req, 'has duration in ms').to.have.property('duration').and.be.a(5)

        expect(duration).to.exist;
        expect(duration).to.be.below(7)
        expect(body.quantidade).to.eq(2)
       })
    });
});