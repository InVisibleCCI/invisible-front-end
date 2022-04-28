Cypress.Commands.add('confirmCaptcha', function () {
    cy.get('iframe')
      .first()
      .then((recaptchaIframe) => {
        const body = recaptchaIframe.contents()
        cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
      })
  })

// Set REACT_APP_CAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI in .env to pass test
// https://codinaaranxa.atlassian.net/wiki/spaces/IW/pages/2916353?atlOrigin=eyJpIjoiNWRlMTFmYmU4ODc3NDk2MjgwYjkzYzhjOWRhODRjNGEiLCJwIjoiaiJ9
describe('try to connect with bad credentials then error is return', () => {
    it('Visit InVisible Homepage', () => {
      cy.visit('http://localhost:3000');
      cy.get('nav').contains('Connexion').click();
      
      cy.get('input[id="email"]').type('in.visible.test.ovh@gmail.com');
      cy.get('input[name="password"]').type('azerfteg');
      cy.confirmCaptcha(); 
      cy.wait(1000)
      
      cy.intercept('*/token').as('loginRequest');

      cy.get('form').submit()
      cy.wait('@loginRequest').then((payload) => {
        const statusCode = payload.response.statusCode; 
        expect(statusCode).equal(401);
      })
      cy.wait(100)
      cy.get('.p-toast-summary').should('have.text', 'Impossible de vous connecter')
  })})

  describe('try to connect with good credentials then good toast is displayed', () => {
    it('Visit InVisible Homepage', () => {
      cy.visit('http://localhost:3000');
      cy.get('nav').contains('Connexion').click();
      
      cy.get('input[id="email"]').type('in.visible.test.ovh@gmail.com');
      cy.get('input[name="password"]').type('eJX8"[28');
      cy.confirmCaptcha(); 
      cy.wait(1000)
      
      cy.intercept('*/token').as('loginRequest');

      cy.get('form').submit()
      cy.wait('@loginRequest').then((payload) => {
        const statusCode = payload.response.statusCode; 
        expect(statusCode).equal(200);
      })
      cy.wait(100)
      cy.get('.p-toast-summary').should('have.text', 'Connexion réussie')
  })})