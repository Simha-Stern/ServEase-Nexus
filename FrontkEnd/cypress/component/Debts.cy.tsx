// // cypress/integration/debts.spec.js

import React from "react";
import { mount } from "@cypress/react";
import Debts from "../../src/features/servants/components/content/debts";
import PendingDebts from "../../src/features/servants/components/content/pendingDebts";

describe("Debts Component", () => {
  it("fetches and displays debts correctly", () => {
    // You can customize this command to match your actual API response structure
    // cy.intercept("GET", "/api/debts", { fixture: "debts.json" }).as(
    //   "fetchDebts"
    // );

    // Mount the Debts component directly without visiting a URL
    mount(<Debts />);

    // Wait for the fetch to complete before proceeding
    // Note: If you are not using cy.intercept, you might not need this wait
    // cy.wait("@fetchDebts");

    // Check if PendingDebts and PaidDebts components exist
    cy.get("[data-cy=pending-debts]").should("exist", { timeout: 10000 });
    cy.get("[data-cy=paid-debts]").should("exist", { timeout: 10000 });

    // Check if CreditedAmount component exists
    cy.get("[data-cy=credited-amount]").should("exist");
  });

  // Add more test cases as needed
});

describe("PendingDebts Component", () => {
  it("renders correctly", () => {
    mount(
      <PendingDebts
        debts={
          [
            /* sample data */
          ]
        }
      />
    );
    cy.get("[data-cy=pending-debts]").should("exist", { timeout: 10000 });
  });
});

// Repeat for PaidDebts and CreditedAmount components
