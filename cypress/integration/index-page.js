describe("Index page", () => {
    /*
    * Visits the page before each test
    */
    beforeEach(() => {
      cy.log(`Visiting http://localhost:3000`);
      cy.visit("/");
    });

    /**
    * Header section
    */
    it("should have a h1", () => {
        cy.get("h1").should("have.length", 1);
    });

    it("should redirect to movie overview page", () => {
      cy.url().should('match', /movieoverview/)
    });
    
});
