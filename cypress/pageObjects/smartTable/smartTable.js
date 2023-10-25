import {BasePage} from "../BasePage";

export class TablesPage extends BasePage {
  _addUserButtonSelector = "i.nb-plus"
  _userIdFieldSelector = "input.form-control.ng-untouched.ng-pristine.ng-valid[placeholder=\"ID\""
  _userFirstNameFieldSelector = "input.form-control.ng-untouched.ng-pristine.ng-valid[placeholder=\"First Name\"]"
  _userLastNameFieldSelector = "input.form-control.ng-untouched.ng-pristine.ng-valid[placeholder=\"Last Name\"]"
  _userUsernameFieldSelector = "input.form-control.ng-untouched.ng-pristine.ng-valid[placeholder=\"Username\"]"
  _userEmailFieldSelector = "input.form-control.ng-untouched.ng-pristine.ng-valid[placeholder=\"E-mail\"]"
  _userAgeFieldSelector = "input.form-control.ng-untouched.ng-pristine.ng-valid[placeholder=\"Age\""
  _saveButtonSelector = "i.nb-checkmark"
  _editButtonSelector = "i.nb-edit"
  _userDataSelector = "table tbody tr.ng-star-inserted"


  constructor() {
    super("pages/tables/smart-table");
  }
  clickAddButton(){
    cy.get(this._addUserButtonSelector).click()
  }
  fill(userId,userFirstName,userLastName,userUsername,userEmail,userAge) {
    cy.get(this._userIdFieldSelector).last().clear().type(userId)
    cy.get(this._userFirstNameFieldSelector).last().clear().type(userFirstName)
    cy.get(this._userLastNameFieldSelector).last().clear().type(userLastName)
    cy.get(this._userUsernameFieldSelector).last().clear().type(userUsername)
    cy.get(this._userEmailFieldSelector).last().clear().type(userEmail)
    cy.get(this._userAgeFieldSelector).last().clear().type(userAge)
  }
  clickSaveButton(){
    cy.get(this._saveButtonSelector).last().click()
  }
  checkUserData(expectedUsers) {
    const users = []
    cy.get(this._userDataSelector).each(($el)=>{
      cy.wrap($el).find('td').then(($cells)=>{
        const user = {
          id: $cells.eq(1).text(),
          firstName: $cells.eq(2).text(),
          lastName: $cells.eq(3).text(),
          userName: $cells.eq(4).text(),
          email: $cells.eq(5).text(),
          age: $cells.eq(6).text(),
        }
        users.push(user)
      })
    }).then(()=>{
      cy.log(users)
      cy.wrap(users[0]).should('deep.equal', expectedUsers)
    })
  }
  clickEditButton(){
    cy.get(this._editButtonSelector).first().click()
  }

  addUser(userId, userFirstName, userLastName, userUsername, userEmail, userAge, expectedUsers){
    this.clickAddButton()
    this.fill(userId, userFirstName, userLastName, userUsername, userEmail, userAge)
    this.clickSaveButton()
    this.checkUserData(expectedUsers)
  }
  editUser(userId,userFirstName,userLastName,userUsername,userEmail,userAge, expectedUsers){
    this.clickEditButton()
    this.fill(userId, userFirstName, userLastName, userUsername, userEmail, userAge)
    this.clickSaveButton()
    this.checkUserData(expectedUsers)
  }
}
