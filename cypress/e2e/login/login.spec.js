import {LoginPage} from "../../pageObjects/auth/loginPage";

describe("Log in", ()=>{
  it('Should login with valid credentials', () => {
    const loginPage = new LoginPage()
    loginPage.navigate()
    loginPage.login("juli.gorbatenko@gmail.com","Qwerty123", true)
  });
})
