describe("/order-summary", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/order-summary");
  });

  describe("Page title", () => {
    it("contains the text Order Summary", () => {
      cy.title().should("contain", "Order Summary");
    });
  });
});
