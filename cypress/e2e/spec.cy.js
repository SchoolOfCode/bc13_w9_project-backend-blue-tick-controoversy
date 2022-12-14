import '@testing-library/cypress/add-commands'
describe('empty spec', () => {
  

  it('passes', () => {
    cy.exec('npm run db-reset')
    cy.visit('http://localhost:3000')
    cy.viewport(1440, 1080)
    cy.get('h1').contains('BOOTCAMP LINKS LIBRARY')
    cy.get('#week').click()
    cy.get('#dropWeek').select('Week 1')
    cy.get('.button-go-container > button').click()
    cy.get('.cards-container > :nth-child(1)').contains('Take me there')
    // cy.get('.cards-container > :nth-child(1)').should('have.value', 'https://javascript.info/')
    cy.get(':nth-child(1) > .card-middle > :nth-child(2)')

    cy.get('#dropInpWeek').select('Week 3')
    cy.get('.title-input').type('CYPRESS TEST')
    cy.get('#dropInpLanguage').select('API')
    cy.get('.input-section-middle > input').type('CYPRESS TEST LINK')
    cy.get('.input-section-bottom > input').type('CYPRESS TEST DESCRIPTION')
    cy.get('.input-section-bottom > button').click()
    cy.get('#subject').click()
    cy.get('#dropSubject').select('API')
    cy.get('.button-go-container > button').click()
    cy.get('.cards-container').contains('CYPRESS TEST')

    cy.get('#49')
    cy.get('#49').contains('0')
    cy.get('#49').click()
    cy.get('#49').contains('1')


    cy.get(':nth-child(2) > .card-middle > :nth-child(1)').click()
    cy.window().then((win) => {
      win.navigator.clipboard.readText().then((text) => {
        expect(text).to.eq('https://rapidapi.com/collection/list-of-free-apis');
      });
    });


  })
})