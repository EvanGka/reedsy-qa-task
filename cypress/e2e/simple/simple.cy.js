describe("Simple Console Test", () => {
  it("prints a message to the console", () => {
    cy.log("✅ This is a simple console log test running in Cypress");
    console.log("✅ This message appears in the Node console");
  });
});
