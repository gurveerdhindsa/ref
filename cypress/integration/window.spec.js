context('Window', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('cy.window() - get the global window object', () => {
    cy.window().should('have.property', 'top');
  });

  it('cy.document() - get the document object', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });

  it('cy.title() - get the title', () => {
    cy.title().should('include', 'ref');
  });

  it('should have a header', () => {
    cy.get('h1').should('have.text', 'React-Express-Firebase Boilerplate');
  });

  it('should have a description', () => {
    cy.get('p').should('have.text', 'Here is a picture of my dog');
  });

  it('should display a image in element div with class image', () => {
    cy.get('div[class="content"]').find('img').should('be.visible');
  });
});
