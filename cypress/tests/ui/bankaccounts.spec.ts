import { User } from "../../../src/models";
import { isMobile } from "../../support/utils";

const apiGraphQL = `${Cypress.env("apiUrl")}/graphql`;

type BankAccountsTestCtx = {
  user?: User;
};

describe("Bank Accounts", function () {
  const ctx: BankAccountsTestCtx = {};


  it("creates a new bank account", function () {
  
  });

  it("should display bank account form errors", function () {
  
    /** Routing number input validations **/
    // Required field
  
    // Min 9 digit
  
    /** Account number input validations **/
    // Required field
  
    // Min 9 digit
  
    // Max 12 digit
  });

  it("soft deletes a bank account", function () {
  
  });

  // TODO: [enhancement] the onboarding modal assertion can be removed after adding "onboarded" flag to user profile
  it("renders an empty bank account list state with onboarding modal", function () {
  
  });
});
