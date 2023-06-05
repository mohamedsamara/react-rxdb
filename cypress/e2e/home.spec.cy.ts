describe('empty spec', () => {
  it('should render a link with the correct text', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('button', { name: /Find Books/i }).should('exist');
  });
});
