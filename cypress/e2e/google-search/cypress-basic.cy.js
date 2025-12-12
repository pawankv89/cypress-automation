describe('Check Cypress Version', () => {
    it('should log the Cypress version', () => {
        cy.log(`Cypress version: ${Cypress.version}`);
    });
});