describe("Posts", ()=>{
  it('should update post by id', () => {
    const postId = 2
    const body = {
      title: 'Praesent eget ',
      body: 'consectetur adipiscing elit',
      userId: 3,
    }

    cy.api({
      url: `/posts/${postId}`,
      method: 'PUT',
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).as("updatePost")

    cy.get("@updatePost").its("status")
      .should("equal", 200)

    cy.get("@updatePost").its("body")
      .should("deep.include", body)
  });
})
