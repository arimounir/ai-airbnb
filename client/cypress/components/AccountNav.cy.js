import React from "react";
import AccountNav from "../../src/AccountNav";

describe("AuthorCard component", () => {
  beforeEach(() => {
    cy.mount(<AccountNav />);
    cy.viewport(1920, 1080);
  });

  it("should render account nav", () => {
    cy.get("nav").should("have.css", "width", "full");
  });
});
