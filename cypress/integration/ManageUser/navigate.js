describe('Visit HomePage and go to register page', () => {
  it('Visit InVisible Homepage', () => {
    cy.visit('http://localhost:3000');
    cy.get('nav').contains('Inscription').click();
    cy.url().should('include', 'register');

  })
})

describe('Visit HomePage and go to connection page', () => {
  it('Visit InVisible Homepage', () => {
    cy.visit('http://localhost:3000');
    cy.get('nav').contains('Connexion').click();
    cy.url().should('include', 'connection');

  })
})