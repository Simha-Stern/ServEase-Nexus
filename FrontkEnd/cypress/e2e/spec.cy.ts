describe("My First Test", () => {
  it('clicking "services" navigates to a new url', () => {
    cy.visit("http://localhost:7160");

    cy.contains("שירותים חודשיים").click();

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should("include", "/services");
  });
});
