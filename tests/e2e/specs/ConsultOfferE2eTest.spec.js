describe('Given the ConsultOffer service', () => {
  describe('When the page loads', () => {
    it('Then should display the detail of the first element in the list', () => {
      cy.visit('http://localhost:8081/#/app/jobs/')
      cy.log('Getting informaion from the server')
      cy.get('.title').contains('Consulta de ofertas')
      cy.log('finding the first element (paused, press resume to continue)')
      cy.get('.jobs-list').find('li').first().as('first-job-offer')
      cy.wait(3000)
      cy.get('@first-job-offer').click()
      cy.log('checking for existence of elements in the DOM')
      cy.get('h1').should('exist')
      cy.get('div').should('exist')
      cy.get('p').should('exist')
    })
  })
})
