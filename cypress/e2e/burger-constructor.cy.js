describe('checking the functionality of the constructor', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients', {
      fixture: 'ingredients.json'
    });

    cy.intercept('GET', 'https://norma.nomoreparties.space/api/auth/user', {
      fixture: 'user.json'
    });

    cy.visit('http://localhost:3000/').viewport(1920, 1080);
  });

  it('check that we are getting to the constructor page', () => {
    cy.contains('Булки')
  });

  it('should open the modal with a certain ingredient', () => {
    cy.contains('Соус Spicy-X').click();
    cy.url().should('include', '/ingredients/643d69a5c3f7b9001cfa0942');
    cy.get('[data-cy="modal-content"]').should('contain', 'Соус Spicy-X');
  });

  it('should close the modal by click', () => {
    cy.contains('Соус Spicy-X').click();
    cy.url().should('include', '/ingredients/643d69a5c3f7b9001cfa0942');
    cy.get('[data-cy="close"]').click();
    cy.contains('Калории').should('not.exist');
  });

  it('should open the page with ingredient and information about him', () => {
    cy.visit('http://localhost:3000/ingredients/643d69a5c3f7b9001cfa093c');
    cy.contains('Краторная булка N-200i')
  });

});
