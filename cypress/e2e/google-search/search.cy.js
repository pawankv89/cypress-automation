describe('Google Search cypress automation', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com')
    })
    it('Display Google Page with title Google', () => {
        cy.title().should('include', 'Google'); 
    })
    it('types into textarea and performs search by class', () => {
        // Type search text into textarea
        cy.get('textarea#APjFqb').type('cypress testing');
        // Press Enter to trigger search
        cy.get('textarea#APjFqb').type('{enter}');
    })
})
