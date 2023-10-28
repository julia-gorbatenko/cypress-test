import posts from "../../../fixtures/api/posts/posts.json"

describe("Posts", ()=>{
  it('should return post by id',() => {
    const postId = 1
    cy.api({
      url: `/posts/${postId}`,
      method: 'GET',
    }).as("getPost")

    cy.get("@getPost").its("status")
      .should("equal", 200)
    cy.get("@getPost").then((req)=>{
    cy.wrap(req).its("body").should("deep.include", posts)
  })
})
})
