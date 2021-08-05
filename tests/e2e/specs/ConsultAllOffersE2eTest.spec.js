describe('Given the ConsultAllOffers service', () => {
  describe('When the page loads', () => {
    it('Then should  gets the list of job offers', () => {
      cy.visit('http://localhost:8081/#/app/jobs/')
      cy.log('Getting informaion from the server')
      cy.get('.title').contains('Consulta de ofertas')
      cy.log('finding the first element (paused, press resume to continue)')
      cy.get('.jobs-list').find('li').first().as('first-job-offer')
      cy.wait(3000)
    })
  })
})
