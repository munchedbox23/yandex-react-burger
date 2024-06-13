describe('checking the functionality of the constructor', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', {
      fixture: 'ingredients.json'
    });

    cy.intercept('GET', '/api/auth/user', {
      fixture: 'user.json'
    });

     cy.intercept('POST', '/api/orders', {
      fixture: 'order.json',
    });

    cy.visit('http://localhost:3000/').viewport(1920, 1080);
  });

  it('should renders the constructor page correctly', () => {
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
    cy.contains('Краторная булка N-200i'); 
  });

  it('testing drag and drop', () => {
    const dataTransfer = new DataTransfer();

    //constructor renders correctly
    cy.get('[data-cy="constructor"]').as('constructor');
    cy.get('@constructor').should('exist').and('contain', 'Перетащите булку');
    cy.get('[data-cy="total-price"]').as('total-price').should('have.text', '0');
    cy.contains('Офорить заказ').should('be.disabled');

    //drag and drop bun
    cy.contains('Краторная булка N-200i').trigger('dragstart', {dataTransfer});
    cy.get('@constructor').trigger('drop', {dataTransfer});
    cy.get('@constructor').should('contain', 'Краторная булка N-200i').and('exist');
    cy.get('@total-price').should('exist').and('have.text', '2510');

    //drag and drop some ingredient
    cy.contains('Филе Люминесцентного тетраодонтимформа').trigger('dragstart', {dataTransfer});
    cy.get('@constructor').trigger('drop', {dataTransfer});
    cy.contains('Соус фирменный Space Sauce').trigger('dragstart', {dataTransfer});
    cy.get('@constructor').trigger('drop', {dataTransfer});
    cy.get('@constructor').within(() => {
      cy.get('> ul > li').should('have.length', 2);
    });
    cy.get('@total-price').should('exist').and('have.text', '3578');

    //create order
    cy.contains('Офорить заказ').should('be.enabled').click();
    cy.get('[data-cy="order-details"]').should('exist');
    cy.contains('42291');
  })
});
