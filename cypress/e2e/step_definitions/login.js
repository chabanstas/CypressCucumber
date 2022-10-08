import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");
const envURLs = require("../../e2e/environment/env.json")

Given("A web browser is at the saucelabs login page", () => {
  cy.visit(envURLs.loginUrl);
});

When("A user enters the Business Email {string}, the password {string}, and clicks on the login button", (email,password) => {
  loginPage.submitLogin(email,password)
});

When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.email);
    cy.log(row.password);
    loginPage.submitLogin(row.email, row.password)

  });
});

When("A user provides {string} email field and empty password field, and clicks on the login button", (email) => {
  loginPage.submitLoginWithoutPassword(email)
});

When("A user provides empty email field and {string} password field, and clicks on the login button", (password) => {
  loginPage.submitLoginWithoutEmail(password)
});

When("A user provides empty email and password fields, and clicks on the login button", () => {
  loginPage.clickLogin()
});

When("A user clicks on Forgot your password? links, enter {string} email and clicks on the reset button", (email) => {
  loginPage.openPassReset();
  loginPage.submitResetPass(email);
});

When("A user clicks on Single Sign-On section, enter empty email and clicks on the reset button", () => {
  loginPage.openSingleSingOn();
  loginPage.SingleSingOnEl.ContinueBtn().dblclick();
});

When("A user clicks on Single Sign-On section, enter {string} email and clicks on the reset button", (email) => {
  loginPage.openSingleSingOn();
  loginPage.submitSingleSingOn(email);
});


Then("The url will contains the {string} subdirectory", (subdirectory) => {
  cy.url().should("contains", subdirectory);
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessageEmailandPassword().should("have.text", errorMessage);
});

Then("The email error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessageEmail().should("have.text", errorMessage);
});

Then("The Reuired password error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessageRequiredPass().should("have.text", errorMessage);
});

Then("The Reuired email error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessageRequiredEmail().should("have.text", errorMessage);
});

Then("The {string} error messages is displayed", (errorMessage) => {
  loginPage.elements.errorMessageRequiredEmail().should("have.text", errorMessage);
  loginPage.elements.errorMessageRequiredPass().should("have.text", errorMessage);
});

Then("The Email Address {string} error messages is displayed", (errorMessage) => {
  loginPage.passResetEl.errorMessage().should("have.text", errorMessage)
});

Then("The email {string} error message is displayed", (errorMessage) => {
  loginPage.passResetEl.errorMessageInvMail().should("have.text", errorMessage);
});

Then("The non-existent email {string} error message is displayed", (errorMessage) => {
  loginPage.passResetEl.errorMessageNonExistentUser().should("have.text", errorMessage);
});

Then("The existent email {string} success message is displayed", (successMessage) => {
  loginPage.passResetEl.successMessage().should("have.text", successMessage);
});

Then("The Company Address {string} error messages is displayed", (errorMessage) => {
  loginPage.SingleSingOnEl.errorMessage().should("have.text", errorMessage)
});

Then("The Single Sign-On Company Address {string} error messages is displayed", (errorMessage) => {
  loginPage.SingleSingOnEl.errorMessageEmail().should("have.text", errorMessage)
});

Then("The not found Company Address {string} error messages is displayed", (errorMessage) => {
  loginPage.SingleSingOnEl.errorMessageNotFound().should("have.text", errorMessage)
});