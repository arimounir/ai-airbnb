describe('Perks component', () => {
  it('should render all perks', () => {
    cy.visit('/');
    cy.get('label').should('have.length', 5);
  });

  it('should call onChange when checkbox is clicked', () => {
    const onChange = cy.spy();
    cy.visit('/', {
      onBeforeLoad(win) {
        win.onChange = onChange;
      }
    });
    cy.get('input[name="wifi"]').click();
    expect(onChange).to.be.calledWith(['wifi']);
  });

  it('should render FontAwesomeIcon', () => {
    cy.visit('/');
    cy.get('FontAwesomeIcon').should('have.length', 5);
  });
});