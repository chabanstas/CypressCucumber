class homeSaucePage {
  elements = {
    emailInput: () => cy.get('form[aria-label="loginForm"] input[name="email"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('form[aria-label="loginForm"]>button'),
    errorMessageEmailandPassword: () => cy.get('span[class*=Message__MessageCopy-sc-1lbs5ge-2]'),
    errorMessageEmail: () => cy.get('[class$=iFEVFt]'),
    errorMessageRequiredPass: () => cy.get('div[class$=flxMbT] [class*=TextField__ErrorMessage-sc-r5o2cn-5]'),
    errorMessageRequiredEmail: () => cy.get('div[class$=eSxLXo] [class*=TextField__ErrorMessage-sc-r5o2cn-5]')
  };

  passResetEl = {
    emailInput: () => cy.get('[name="email"]'),
    resetPassBtn: () => cy.get('[role="button"]'),
    errorMessage: () => cy.get('[class*=TextField__ErrorMessage-wqPfx]'),
    errorMessageInvMail: () => cy.contains('Please enter a valid email address.'),
    errorMessageNonExistentUser: () => cy.contains('your browser could not be authenticated'),
    fogot: () => cy.get('[href="/#/login/password-reset"]'),
    successMessage: () => cy.get('div[class*=Text-dgspRF]>div')
  };

  SingleSingOnEl = {
    emailInput: () => cy.get('div[class*=TextField__InputWrapper-hGJUmT]>[class="ui-reactv2-input"]'),
    ContinueBtn: () => cy.get('button[type="submit"][class$=hKxygd]'),
    errorMessage: () => cy.get('[class$=fjBYhj]').contains("Required"),
    errorMessageEmail: () => cy.get('[class$=fjBYhj]').contains("Please enter a valid email address."),
    errorMessageNotFound: () => cy.get('[type="error"][class$=ijTSPa]'),
    SingleSingOnBtn: () => cy.get('[name="sso"][role="button"]'),
  };

  typeUsername(email) {
    this.elements.emailInput().type(email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(email,password){
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  submitLoginWithoutPassword(email){
    this.elements.emailInput().type(email);
    this.elements.loginBtn().click();
  }

  submitLoginWithoutEmail(password){
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  submitResetPass(email){
    this.passResetEl.emailInput().type(email);
    this.passResetEl.resetPassBtn().click().wait(2000);
  }

  openPassReset(){
    this.passResetEl.fogot().click()
  }

  openSingleSingOn(){
    this.SingleSingOnEl.SingleSingOnBtn().click()
  }

  submitSingleSingOn(email){
    this.SingleSingOnEl.emailInput().type(email);
    this.SingleSingOnEl.ContinueBtn().click();
  }

}

module.exports = new homeSaucePage();
