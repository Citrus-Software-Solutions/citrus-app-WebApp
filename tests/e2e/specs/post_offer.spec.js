describe('Post Offer use case', () => {
  it('connects to the page and goes to the post offer interface', () => {
    cy.visit('http://localhost:8081')
    cy.wait(3000)
    cy.get('a').contains('Crear Oferta').click()
    cy.url().should('include', '/jobs/add')
    cy.get('input[name="name"]').should('exist')
    cy.get('input[name="name"]')
      .type('Example Job 1')
      .should('have.value', 'Example Job 1')
    cy.get('input[name = "location"]').should('exist')
    cy.get('input[name = "location"]')
      .type('Somewhere')
      .should('have.value', 'Somewhere')
    cy.get('.p-inputtextarea').should('exist')
    cy.get('.p-inputtextarea')
      .type(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dolor vitae augue gravida sagittis. Nullam eget gravida mi, a sodales urna. Cras nec est eget libero iaculis vehicula. Vestibulum facilisis efficitur enim, vitae fringilla dui tristique non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer porta, dui ac dignissim viverra, ligula ligula hendrerit erat, nec ultrices est elit sit amet ipsum. Nam sagittis enim ut mauris tristique gravida. Quisque vel augue commodo mi laoreet vulputate quis ac nisl. Fusce congue sapien at elit cursus efficitur.'
      )
      .should(
        'have.value',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a dolor vitae augue gravida sagittis. Nullam eget gravida mi, a sodales urna. Cras nec est eget libero iaculis vehicula. Vestibulum facilisis efficitur enim, vitae fringilla dui tristique non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer porta, dui ac dignissim viverra, ligula ligula hendrerit erat, nec ultrices est elit sit amet ipsum. Nam sagittis enim ut mauris tristique gravida. Quisque vel augue commodo mi laoreet vulputate quis ac nisl. Fusce congue sapien at elit cursus efficitur.'
      )
    cy.get(':nth-child(2) > .p-radiobutton-box').should('exist')
    cy.get('[type="radio"]').first().check({ force: true })
    cy.get('input[name="min_age"]').should('exist')
    cy.get('input[name="min_age"]').type(21).should('have.value', '21')
    cy.get('input[name="max_age"]').should('exist')
    cy.get('input[name="max_age"]').type(35).should('have.value', '35')
    cy.get('input[name="salary"]').should('exist')
    cy.get('input[name="salary"]').type(1250).should('have.value', '1,250')
    cy.get('input[name="available_vacans"]').should('exist')
    cy.get('input[name="available_vacans"]').type(2).should('have.value', '2')
    cy.get('.p-button').contains('Agregar Oferta').click()
    cy.scrollTo('top')
    cy.get('.p-message-text').contains('Oferta agregada exitosamente')
    cy.wait(2000)
    cy.get('[href="#/jobs"] > .pi').click()
    cy.wait(1500)
    cy.scrollTo('bottom')
  })
})
