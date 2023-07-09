import React from "react";
import AccountNav from "../../src/AccountNav";

const author = {
  name: "Test Author",
  picture: {
    url: "https://via.placeholder.com/200",
  },
};
describe("AuthorCard component", () => {
  beforeEach(() => {
    cy.mount(<AccountNav {...author} />);
    cy.viewport(1920, 1080);
  });

  it("should render account nav", () => {
    cy.get("nav").should("have.css", "width", "full");
  });
});
