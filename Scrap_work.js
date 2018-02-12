describe('My First Test', function() {
    it('finds the contents "type"', function() {
        cy.visit('https://example.cypress.io')


        cy.contains('type').click()

        //should be on a new URL which includes '/commands/actions'

        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})

