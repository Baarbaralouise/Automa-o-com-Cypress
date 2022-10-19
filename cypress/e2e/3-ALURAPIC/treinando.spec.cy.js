describe('Abrir o site Amazon e buscar produto  ', () => {

    beforeEach(() => {
        cy.visit('https://www.amazon.com.br') // ABRINDO URL
    })

    it('Buscar produto Amazon', () => {
        cy.get('#twotabsearchtextbox').type('Kindle') // Buscando Produto
        cy.get('#nav-search-submit-button').click();
        
    })

})