import {BasePage} from "../BasePage";

export class LoginPage extends BasePage {
  _emailInputSelector = "form input#input-email"
  _passwordInputSelector = "form input#input-password"
  _rememberMeSelector = "form .custom-checkbox"
  _loginButtonSelector = 'form button[status="primary"]'

  constructor() {
    super("auth/login");
  }

  fill(email, password, rememberMeCheckbox){
    cy.get(this._emailInputSelector).type(email)
    cy.get(this._passwordInputSelector).type(password)

    if(rememberMeCheckbox){
      cy.get(this._rememberMeSelector).click()
    }
  }

  clickLoginButton(){
    cy.get(this._loginButtonSelector).click()
  }

  login(email, password, rememberMe){
    this.fill(email, password, rememberMe)
    this.clickLoginButton()
    cy.url().should('contain', '/pages')
  }
}
