describe('Dashboard Page', () => {
  it('loads successfully', () => {
    cy.visit('/');
    cy.contains('Forecast Dashboard');
  });
});