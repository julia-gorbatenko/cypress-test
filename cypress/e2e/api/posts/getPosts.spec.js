import posts from "../../../fixtures/api/posts/posts.json";

describe("Posts", ()=>{
  it('should return all posts',() => {
    cy.api({
      url: `/posts/`,
      method: 'GET',
    }).as("getPosts")

    cy.get("@getPosts").its("status")
      .should("equal", 200)
     cy.get("@getPosts").its("body")
      .should('deep.equal', posts)

    cy.get("@getPosts").then((req)=>{
      expect(req.body).to.have.length(100)
      expect(req.body).to.be.an("array")
      expect(req.body[0]).to.have.keys('userId', 'id','title','body')
  })
  });
})

