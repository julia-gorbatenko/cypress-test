import {TablesPage} from "../../pageObjects/smartTable/smartTable";
describe("Smart table", ()=>{
  beforeEach(()=>{
    cy.visit('pages/tables/smart-table')
  })


  it('New user should be created', () => {

    const createdUser ={
      "id": "11",
      "firstName": "Julia",
      "lastName": "Gorbatenko",
      "userName": "jgorbatenko",
      "email": "juli.gorbatenko@gmail.com",
      "age":"31"
    }
    const editedUser ={
      "id": "111",
      "firstName": "Julia1",
      "lastName": "Gorbatenko1",
      "userName": "jgorbatenko1",
      "email": "juli.gorbatenko1@gmail.com",
      "age":"30"
    }

    const tablesPage = new TablesPage()
    {
      tablesPage.navigate()
      tablesPage.addUser("11", "Julia", "Gorbatenko", "jgorbatenko","juli.gorbatenko@gmail.com", "31", createdUser)
      tablesPage.editUser("111", "Julia1", "Gorbatenko1", "jgorbatenko1","juli.gorbatenko1@gmail.com", "30", editedUser)
    }
  })
})

