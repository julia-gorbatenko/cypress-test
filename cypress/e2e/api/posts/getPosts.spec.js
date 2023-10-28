import posts from "../../../fixtures/api/posts/posts.json";

describe("Posts", ()=>{
  it('should return all posts',() => {
    const postId = 1
    cy.api({
      url: `/posts/`,
      method: 'GET',
    }).as("getPosts")

    cy.get("@getPosts").its("status")
      .should("equal", 200)

    cy.get("@getPosts").then((req)=>{
      cy.wrap(req).its("body[0]").should("deep.include", posts)
    })
  });
})
