describe('Encontrar cursos no site da Alura', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br')
    })


    /*it('Buscar curso de Java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get(':nth-child(3) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome')
        .should('have.text', 'Formação Java e Orientação a Objetos');
    }) */

    it('Buscar curso de Java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
        .should('contain', 'Formação Java e Orientação a Objetos');
    }) 

    
})