describe('Chatgpt Search cypress automation', () => {
    beforeEach(() => {
        // Visit your app
        cy.visit('https://chatgpt.com/')
    })
    it('Display Chatgpt Page with title ChatGPT', () => {
        cy.title().should('include', 'ChatGPT');
    })
    it('Types into textarea and performs search', () => {
        // Open Login Dialog to closed with button Label Maybe later
        cy.get('textarea.wcDTda_fallbackTextarea').type('typing');
        cy.wait(2000);
        cy.contains('button', 'Maybe later').click();
        // Clear input text
        cy.get('#prompt-textarea').clear();
        // Type search text into textarea
        cy.get('#prompt-textarea').type('cypress testing');
        // Press Enter to trigger search
        cy.get('#prompt-textarea').type('{enter}');
        // Assert or interact with results
        // Internal Server Error
    })
});