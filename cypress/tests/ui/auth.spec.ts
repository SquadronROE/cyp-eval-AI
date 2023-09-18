import { User } from "../../../src/models";
import { isMobile } from "../../support/utils";

const apiGraphQL = `${Cypress.env("apiUrl")}/graphql`;

describe("User Sign-up and Login", function () {


  it("should redirect unauthenticated user to signin page", function () {

  });

  it("should redirect to the home page after login", function () {
    
  });

  it("should remember a user for 30 days after login", function () {
   
  });

  it("should allow a visitor to sign-up, login, and logout", function () {
    const userInfo = {
      
    };

    // Sign-up User
    
    // Login User
   

    // Onboarding
    

    // Logout User
    
  });

  it("should display login errors", function () {
    
  });

  it("should display signup errors", function () {
    
  });

  it("should error for an invalid user", function () {
    
  });

  it("should error for an invalid password for existing user", function () {
    
  });
});
