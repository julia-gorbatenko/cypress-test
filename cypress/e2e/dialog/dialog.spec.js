describe("Dialog", ()=>{
  beforeEach(()=>{
    cy.visit('/pages/modal-overlays/dialog')
  })

    it('Enter name popup should display correct title, input field, cancel and Submit buttons', () => {
      cy.get('button.appearance-filled.size-medium.status-primary.shape-rectangle.transitions').last().as("enterNameButton")
      cy.get("@enterNameButton").should('be.visible').and('have.text', "Enter Name")
      cy.get("@enterNameButton").click()

      cy.get('ngx-dialog-name-prompt.ng-star-inserted').last().as("enterNameModal")
      cy.get('nb-card-header').last().as("enterNameModalTitle")
      cy.get('input.size-medium.shape-rectangle').as("enterNameModalInput")
      cy.get('button.cancel.appearance-filled.size-medium.status-danger.shape-rectangle.transitions').as("enterNameModalCancelButton")
      cy.get('button.appearance-filled.size-medium.status-success.shape-rectangle.transitions').as("enterNameModalSubmitButton")
      cy.get('input.size-medium.shape-rectangle').as("enterNameModalInput")

      cy.get("@enterNameModalTitle").should('be.visible').and('have.text', "Enter your name")
      cy.get("@enterNameModalInput").should('be.visible')
      cy.get("@enterNameModalCancelButton").should('be.visible').and('have.text', "Cancel")
      cy.get("@enterNameModalSubmitButton").should('be.visible').and('have.text', "Submit")
  })
})
