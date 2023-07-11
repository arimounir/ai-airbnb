import React from "react";
import AccountNav from "../../src/AccountNav";
import { MemoryRouter } from "react-router-dom";

const options = () => {
  return {
    pathname: "/",
    route: "/",
    query: {},
    asPath: "/",
    components: {},
    isFallback: false,
    basePath: "",
    events: {
      emit: cy.spy().as("emit"),
      off: cy.spy().as("off"),
      on: cy.spy().as("on"),
    },
    push: cy.spy().as("push"),
    replace: cy.spy().as("replace"),
    reload: cy.spy().as("reload"),
    back: cy.spy().as("back"),
    prefetch: cy.stub().as("prefetch").resolves(),
    beforePopState: cy.spy().as("beforePopState"),
    isLocaleDomain: true,
    isReady: true,
    isPreview: false,
  };
};

describe("AccountNav component", () => {
  beforeEach(() => {
    const { routerProps = { initialEntries: ["/"] }, ...mountOptions } =
      options;
    cy.mount(
      <MemoryRouter {...routerProps}>
        <AccountNav />
      </MemoryRouter>
    );
    cy.viewport(1920, 1080);
  });

  it("should render account nav", () => {
    cy.get("nav").should("have.class", "w-full");
  });
});
